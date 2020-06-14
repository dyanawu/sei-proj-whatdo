import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Item from './components/item'

export default class ItemList extends Component {
  render() {
    const items = this.props.items;
    const itemCards = items.map(i => {
      return (
        <Item
          item={i}
          key={i.id}/>
      );
    });

    let listButtons;
    if (this.props.currentList) {
      listButtons = (
        <button
          onClick={() => this.props.delList(this.props.currentList)}
          className="btn btn-dark"
        >
          delete list
        </button>
      );
    } else {
    }

    return (
      <>
        <div className="row d-flex justify-content-around">
          {listButtons}
        </div>
        <div className="row my-3 px-3 flex-sm-grow-1">
          {itemCards}
        </div>
      </>
    );
  }
}
