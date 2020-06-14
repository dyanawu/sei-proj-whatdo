import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Item from './components/item'
import ListForm from './components/listform'

export default class Todos extends Component {
  render() {
    const items = this.props.items;
    const itemCards = items.map(i => {
      return (
        <Item
          item={i}
          key={i.id}/>
      );
    });

    return (
      <>
        <div className="d-flex row justify-content-center">
          <ListForm
          />
        </div>
        <div className="row my-3 px-3 flex-sm-grow-1">
          {itemCards}
        </div>
      </>
    );
  }
}
