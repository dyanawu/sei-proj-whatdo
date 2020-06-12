import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import List from './components/list'

export default class Todos extends Component {
  render() {
    const lists = this.props.lists;

    const listCards =  lists.map(l => {
      return (
        <List todo={l}
              key={l.id}/>
      );
    });

    return (
      <div className="row my-3 px-3">
        {listCards}
      </div>
    );
  }
}
