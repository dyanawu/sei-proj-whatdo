import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import List from './components/list'
import ListForm from './components/listform'

export default class Todos extends Component {
  render() {
    const lists = this.props.lists;

    const listCards = lists.map(l => {
      return (
        <List list={l}
              key={l.id}/>
      );
    });

    return (
      <>
        <div className="d-flex row justify-content-center">
          <ListForm
          />
        </div>
        <div className="row my-3 px-3 flex-sm-grow-1">
          {listCards}
        </div>
      </>
    );
  }
}
