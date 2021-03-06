import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Sidebar from './sidebar'
import List from './list'

class WhatDo extends Component {
  constructor() {
    super();

    this.state = {
      lists: [],
      items: [],
      currentList: undefined,
      currentListName: undefined,
      changedListName: undefined,
      newListName: undefined,
      newItemName: undefined
    };
  }

  fetchLists() {
    const url = '/lists.json';
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        this.setState({ lists: data });
      })
      .catch(err => console.error(err));
  }

  fetchItems() {
    const url = '/items.json';
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        this.setState({items: data});
        this.setState({currentList: undefined});
      })
      .catch(err => console.error(err));
  }

  fetchListItems(id) {
    const url = `/listitems/${id}.json`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        const [list] = this.state.lists.filter((l) => l.id === parseInt(id));
        this.setState({
          items: data,
          currentList: id,
          currentListName: list.name,
          newItemName: undefined});
      })
      .catch(err => console.error(err));
  }

  setList(e) {
    this.setState({
      newListName: e.target.value
    });
  }

  setChangedListName(e) {
    this.setState({
      changedListName: e.target.value
    });
  }

  renameList() {
    let token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

    const url = `/lists/${this.state.currentList}.json`;

    axios
      .patch(url, {
        name: this.state.changedListName
      })
      .then((res) => {
        this.setState({
          currentListName: this.state.changedListName,
          changedListName: undefined
        });
        this.fetchLists();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addList() {
    let token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

    const url = '/lists.json';

    axios
      .post(url, {
        name: this.state.newListName,
      })
      .then((res) => {
        let newList = res.data;
        this.setState({
          lists: [...this.state.lists, newList],
          newListName: undefined,
          currentList: newList.id,
          currentListName: this.state.newListName
        });
        this.fetchListItems(newList.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  delList(id) {
    let token = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

    const url = `/lists/${id}.json`;
    axios
      .delete(url)
      .then((res) => {
        this.fetchLists();
        this.fetchItems();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  setItem(e) {
    this.setState({newItemName: e.target.value});
  }

  addItemToList(item, listId) {
    let token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

    const url = '/items.json';

    axios
      .post(url, {
        name: this.state.newItemName,
        list_id: this.state.currentList
      })
      .then((res) => {
        let newItem = res.data;
        this.setState({
          items: [...this.state.items, newItem],
          newItemName: undefined
        });
        this.fetchListItems(this.state.currentList);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  toggleDone(e) {
    let token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

    const url = `/items/${e.target.id}.json`;

    const [item] = this.state.items.filter((i) => i.id === parseInt(e.target.id));
    const otherItems = this.state.items.filter((i) => i.id !== parseInt(e.target.id));

    axios
      .patch(url, {
        done: !item.done
      })
      .then((res) => {
        let newItem = res.data;
        let nowItems = [...otherItems, newItem];
        nowItems.sort((a, b) => a.id - b.id);
        this.setState({
          items: [...nowItems]
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  delItem(id) {
    let token = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

    const url = `/items/${id}.json`;
    axios
      .delete(url)
      .then((res) => {
        if (this.state.currentList) {
          this.fetchListItems(this.state.currentList);
        } else {
          this.fetchLists();
          this.fetchItems();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <div className="col-md-2 no-gutters p-4">
          <Sidebar
            lists={this.state.lists}
            newListName={this.state.newListName}
            fetchItems={() => this.fetchItems()}
            fetchListItems={(id) => this.fetchListItems(id)}
            setList={(e) => this.setList(e)}
            addList={() => this.addList()}
          />
        </div>
        <div className="col-md-10 no-gutter p-3">
          <List
            items={this.state.items}
            newItemName={this.state.newItemName}
            currentList={this.state.currentList}
            currentListName={this.state.currentListName}
            changedListName={this.state.changedListName}
            delList={(id) => this.delList(id)}
            setChangedListName={(e) => this.setChangedListName(e)}
            renameList={(id) => this.renameList(id)}
            setItem={(e) => this.setItem(e)}
            addItemToList={(item, list) => this.addItemToList(item, list)}
            toggleDone={(e) => this.toggleDone(e)}
            delItem={(id) => this.delItem(id)}
          />
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchLists();
    this.fetchItems();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WhatDo />,
    document.getElementById('whatdo')
  );
})
