import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Item extends Component {
  render() {
    const i = this.props.item;
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-1"
      >
        <div
          className="card list-card w-90"
        >
          <div className="card-body">
            {i.name}
          </div>
          <div className="card-footer py-1">
            <p className="m-0">Status: {i.done ? "done" : "undone"}</p>
          </div>
        </div>
      </div>
    );
  }
}
