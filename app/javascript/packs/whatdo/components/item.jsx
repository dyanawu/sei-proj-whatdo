import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Item extends Component {
  render() {
    const i = this.props.item;
    const done = i.done;
    const cardClasses = done ?
                        "card w-90 text-muted" :
                        "card w-90";
    const statusBadgeClasses = done ?
                               "badge badge-success p-2 text-white" :
                               "badge badge-warning p-2";
    const statusBadge = (
      <span
        className={statusBadgeClasses}
      >
        {i.done ? "done" : "undone"}
      </span>
    );

    const doneActionBadgeClasses = done ?
                             "badge badge-warning p-2" :
                             "badge badge-success p-2 text-white";
    const doneActionBadge = (
      <a
        href="#"
        className={doneActionBadgeClasses}
        id={i.id}
        onClick={(e) => this.props.toggleDone(e)}
      >
        {i.done ? "undo" : "done?"}
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
            {statusBadge}
            {doneActionBadge}
          </div>
        </div>
      </div>
    );
  }
}
