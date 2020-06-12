import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Sidebar from './sidebar'
import Todos from './todos'

class WhatDo extends Component {
  constructor() {
    super();

    this.state = {
      tags: [],
      lists: []
    };
  }

  fetchTags() {
    const url = '/tags.json';
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        this.setState({ tags: data });
      })
      .catch(err => console.log(err));
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

  fetchListsByTag(id) {
    const url = `/taglists/${id}.json`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        this.setState({ lists: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="col-2 no-gutters p-4">
          <Sidebar
            tags={this.state.tags}
            fetchLists={() => this.fetchLists()}
            fetchListsByTag={(id) => this.fetchListsByTag(id)}
          />
        </div>
        <div className="col-10 no-gutters p-4">
          <Todos lists={this.state.lists}/>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchTags();
    this.fetchLists();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WhatDo />,
    document.getElementById('whatdo')
  );
})
