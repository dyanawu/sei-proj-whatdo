import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

export default class RenameForm extends Component {
  render() {
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#rename-form"
        >
          rename list
        </button>

        <div className="modal fade" id="rename-form" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <form>
                  <div
                    className="form-group">
                    <label>new list name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.props.changedListName || ""}
                      onChange={(e) => this.props.setChangedListName(e)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-dark"
                    data-dismiss="modal"
                    onClick={() => this.props.renameList()}
                  >
                    rename list
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
