import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import RenameForm from './renameform'

export default class ListViewForm extends Component {
  render() {
    const currentList = this.props.currentList;
    return (
      <>
        <div className="col-md-6 no-gutters px-1">
          <input
            id="itemfield"
            className="form-control"
            onChange={(e) => this.props.setItem(e)}
            value={this.props.newItemName || ''}
          />
        </div>
        <div className="col-md-3 p-0">
          <button
            onClick={() => this.props.addItemToList(this.props.newItemName, currentList)}
            className="btn btn-dark"
          >
            add item
          </button>
        </div>

        <div className="col-md-3 p-0 d-flex justify-content-end">
          <RenameForm
            changedListName={this.props.changedListName}
            setChangedListName={(e) => this.props.setChangedListName(e)}
            renameList={() => this.props.renameList()}
          />
          <button
            onClick={() => this.props.delList(currentList)}
            className="btn btn-warning ml-4"
          >
            delete list
          </button>
        </div>
      </>
    );
  }
}
