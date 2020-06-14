import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ListForm from './components/listform'
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

    const listForm = this.props.currentList ?
                     (<ListForm
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
