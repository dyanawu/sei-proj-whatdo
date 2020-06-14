import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Sidebar from './sidebar'
import ItemList from './itemlist'

class WhatDo extends Component {
  constructor() {
    super();

    this.state = {
      lists: [],
      items: [],
      currentList: undefined,
      newListtitle: undefined
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
        this.setState({items: data});
        this.setState({currentList: id});
      })
      .catch(err => console.log(err));
  }

  setList(e) {
    this.setState({
      newListTitle: e.target.value
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
        name: this.state.newListTitle,
      })
      .then((res) => {
        let newList = res.data;
        this.setState({lists: [...this.state.lists, newList]});
        this.setState({newListTitle: undefined});
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

  render() {
    return (
      <>
        <div className="col-md-2 no-gutters p-4">
          <Sidebar
            lists={this.state.lists}
            fetchItems={() => this.fetchItems()}
            fetchListItems={(id) => this.fetchListItems(id)}
            setList={(e) => this.setList(e)}
            addList={() => this.addList()}
          />
        </div>
        <div className="col-md-10 no-gutter p-3">
          <ItemList
            currentList={this.state.currentList}
            lists={this.state.lists}
            items={this.state.items}
            delList={(id) => this.delList(id)}
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
