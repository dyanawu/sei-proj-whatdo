import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ListViewForm extends Component {
  render() {
    const currentList = this.props.currentList;
    return (
      <>
        <div className="col-md-8 no-gutters px-1">
          <input
            id="itemfield"
            className="form-control"
            onChange={(e) => this.props.setItem(e)}
            value={this.props.newItemName || ''}
          />
        </div>
        <div className="col-md-2 no-gutters p-0">
          <button
            onClick={() => this.props.addItemToList(this.props.newItemName, currentList)}
            className="btn btn-dark"
          >
            add item
          </button>
        </div>

        <div className="col-md-2 no-gutters px-auto py-0 text-right">
          <button
            onClick={() => this.props.delList(currentList)}
            className="btn btn-warning"
          >
            delete list
          </button>
        </div>
      </>
    );
  }
}
