import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

import Items from './items'
import Tags from './tags'

export default class ListModal extends Component {
  render() {
    const l = this.props.list;
    const items = this.props.items;
    const tags = this.props.tags;

    const modalTarget = `#${l.name+l.id}`

    return (
      <Fragment key={modalTarget}>
        <button
          type="button"
          className="btn btn-dark btn-block"
          data-toggle="modal"
          data-target={modalTarget}
        >
          {l.name}
        </button>

        <div className="modal fade" id={l.name+l.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{l.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Items items={items} />
              </div>
              <div className="modal-footer">
                <Tags tags = {tags} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
