import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Item extends Component {
  render() {
    const i = this.props.item;
    const done = i.done;
    const cardClasses = done ?
                        "card w-90 text-muted done-cards" :
                        "card w-90";
    const doneActionBadgeClasses = done ?
                             "btn btn-warning btn-small p-1 text-white" :
                             "btn btn-success btn-small p-1 text-white";
    const doneActionBadge = (
      <a
        href="#"
        className={doneActionBadgeClasses}
        id={i.id}
        onClick={(e) => this.props.toggleDone(e)}
      >
        {i.done ? "undo" : "mark done"}
      </a>
    );

    const deleteActionBadge = (
      <a
        href="#"
        className="btn btn-outline-dark btn-small p-1 text-dark"
        id={i.id}
        onClick={(e) => this.props.delItem(e.target.id)}
      >
        delete
      </a>
    );

    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-1"
      >
        <div
          className={cardClasses}
        >
          <div
            className="card-body"
          >
            {i.name}
          </div>
          <div className="card-footer d-flex justify-content-between">
            {deleteActionBadge}
            {doneActionBadge}
          </div>
        </div>
      </div>
    );
  }
}
