import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Sidebar from './sidebar'
import Todos from './todos'

class WhatDo extends Component {
  constructor() {
    super();

    this.state = {
      lists: [],
      items: [],
      currentList: undefined
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
        this.setState({ items: data });
      })
      .catch(err => console.log(err));
  }

  fetchListItems(id) {
    this.setState({currentList: id});
    const url = `/listitems/${id}.json`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        this.setState({items: data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="col-md-2 no-gutters p-4">
          <Sidebar
            lists={this.state.lists}
            fetchItems={() => this.fetchItems()}
            fetchListItems={(id) => this.fetchListItems(id)}
          />
        </div>
        <div className="col-md-10 no-gutter p-3">
          <Todos
            currentList={this.state.currentList}
            lists={this.state.lists}
            items={this.state.items}/>
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
