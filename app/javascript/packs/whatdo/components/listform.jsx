import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ListForm extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.delList(this.props.currentList)}
        className="btn btn-dark"
      >
        delete list
      </button>
    );
  }
}
