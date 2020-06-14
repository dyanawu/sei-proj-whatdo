import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ListForm extends Component {
  constructor() {
    super();
  }

  addItemToList(item, listId) {
    console.log("add to", listId);
    console.log(item);
  }

  setItem(e) {
    this.setState({newItemName: e.target.value});
    console.log(this.state.newItemName);
  }

  render() {
    const currentList = this.state.currentList;
    return (
      <>
        <div className="col-md-8 no-gutters p-0">
          <input
            className="form-control"
            placeholder="new list item"
            defaultValue={this.props.newItemName}
            onChange={(e) => this.setItem(e)}
          />
        </div>
        <div className="col-md-2 no-gutters px-auto py-0">
          <button
            onClick={() => this.addItemToList(this.state.newItemName, currentList)}
            className="btn btn-dark"
          >
            add item
          </button>
        </div>

        <div className="col-md-2 no-gutters px-auto py-0">
          <button
            onClick={() => this.props.delList(currentList)}
            className="btn btn-dark"
          >
            delete list
          </button>
        </div>
      </>
    );
  }
}
