import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ItemForm from './components/itemform'
import Item from './components/item'

export default class List extends Component {
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

    const itemForm = this.props.currentList ?
                     (<ItemForm
                        newItemName={this.props.newItemName}
                        currentList={this.props.currentList}
                        delList={(id) => this.props.delList(id)}
                        setItem={(e) => this.props.setItem(e)}
                        addItemToList={(item, list) => this.props.addItemToList(item, list)}
                     />) :
                     ""

    return (
      <>
        <div className="row my-3 px-3 flex-sm-grow-1">
          {itemForm}
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
