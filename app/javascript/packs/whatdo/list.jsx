import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ListViewForm from './components/listviewform'
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
          key={i.id}
          toggleDone={(e) => this.props.toggleDone(e)}
          delItem={(id) => this.props.delItem(id)}

        />
      );
    });

    const doneItemCards = doneItems.map(i => {
      return (
        <Item
          item={i}
          key={i.id}
          toggleDone={(e) => this.props.toggleDone(e)}
          delItem={(id) => this.props.delItem(id)}
        />
      );
    });

    const listViewForm = this.props.currentList ?
                         (
                           <ListViewForm
                             newItemName={this.props.newItemName}
                             currentList={this.props.currentList}
                             delList={(id) => this.props.delList(id)}
                             setItem={(e) => this.props.setItem(e)}
                             addItemToList={(item, list) => this.props.addItemToList(item, list)}
                           />) :
                         "";

    const listInfo = this.props.currentList ?
                     (<>
                       <div className="row my-3 px-3 flex-sm-grow-1">
                         <h4 className="list-title">
                           {this.props.currentListName}
                         </h4>
                       </div>
                       <div className="row mt-2 mb-5 px-3 flex-sm-grow-1">
                         {listViewForm}
                       </div>
                     </>) :
                     (<>
                       <div className="row my-3 px-3 flex-sm-grow-1">
                         <h4 className="list-title">
                           items from all lists
                         </h4>
                       </div>
                     </>);

    return (
      <>
        {listInfo}
        <div className="row mt-3 mb-5 px-3 flex-sm-grow-1">
          {undoneItemCards}
        </div>
        <div className="divider">
          <h6>done items</h6>
        </div>
        <div className="row my-3 px-3 pt-1 flex-sm-grow-1">
          {doneItemCards}
        </div>
      </>
    );
  }
}
