import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ListForm from './components/listform'
import Item from './components/item'

export default class ItemList extends Component {
  render() {
    const items = this.props.items;

    const undoneItems = items.filter(i => i.done === false)
    const doneItems = items.filter(i => i.done === true)
    const undoneItemCards = undoneItems.map(i => {
      return (
        <Item
          item={i}
          key={i.id}/>
      );
    });

    const doneItemCards = doneItems.map(i => {
      return (
        <Item
          item={i}
          key={i.id}/>
      );
    });

    const listForm = this.props.currentList ?
                     (<ListForm
                        currentList={this.props.currentList}
                        delList={(id) => this.props.delList(id)}
                     />) :
                     ""

    return (
      <>
        <div className="row d-flex justify-content-around">
          {listForm}
        </div>
        <div className="row my-3 px-3 flex-sm-grow-1">
          {undoneItemCards}
        </div>
        <div className="row my-3 px-3 flex-sm-grow-1">
          {doneItemCards}
        </div>
      </>
    );
  }
}
