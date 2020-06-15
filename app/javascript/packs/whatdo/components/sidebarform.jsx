import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

export default class SidebarForm extends Component {
  render() {
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-dark btn-block "
          data-toggle="modal"
          data-target="#modal-form"
        >
          add list
        </button>

        <div className="modal fade" id="modal-form" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <form>
                  <div
                    className="form-group">
                    <label>list name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.props.newListName || ""}
                      onChange={(e) => this.props.setList(e)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-dark"
                    data-dismiss="modal"
                    onClick={() => this.props.addList()}
                  >
                    create list
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
