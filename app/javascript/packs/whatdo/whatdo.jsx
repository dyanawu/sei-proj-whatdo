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
      .catch(err => console.log(err));
  }

  fetchItems() {
    const url = '/items.json';
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({items: data});
        this.setState({currentList: undefined});
      })
      .catch(err => console.log(err));
  }

  fetchListItems(id) {
    const url = `/listitems/${id}.json`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        const [list] = this.state.lists.filter((l) => l.id === parseInt(id));
        console.log(list);
        this.setState({
          items: data,
          currentList: id,
          currentListName: list.name,
          newItemName: undefined});
      })
      .catch(err => console.log(err));
  }

  setList(e) {
    this.setState({
      newListName: e.target.value
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
    console.log(this.state.newItemName);
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
        console.log(newItem);
        this.setState({
          items: [...this.state.items, newItem],
          newItemName: undefined
        });
        this.fetchListItems(this.state.currentList);
        console.log(this.state);
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

    console.log(this.state.items);
    const [item] = this.state.items.filter((i) => i.id === parseInt(e.target.id));
    console.log(item);

    axios
      .patch(url, {
        done: !item.done
      })
      .then((res) => {
        let newItem = res.data;
        console.log(newItem);
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
            delList={(id) => this.delList(id)}
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
