import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Items from './items'
import Tags from './tags'

export default class List extends Component {
  constructor() {
    super();

    this.state = {
      tags: [],
      items: []
    };
  }

  fetchListTags(id) {
    const url = `/listtags/${id}.json`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        this.setState({tags: data});
      })
      .catch(err => console.log(err));
  }

  fetchListItems(id) {
    const url = `/listitems/${id}.json`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        this.setState({items: data});
      })
      .catch(err => console.log(err));
  }

  showList(e) {
    const ele = e.target;
    console.log(ele.dataset.listid);
  }

  render() {
    let l = this.props.list;
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-1"
      >
          <div
            className="card list-card"
            style={{width: "18rem"}}
          >
            <div
              data-listid={l.id}
              className="card-header clickable"
              onClick={(e) => this.showList(e)}
            >
              <h3
                data-listid={l.id}
                className="card-title"
              >
                {l.name}
              </h3>
            </div>
            <div className="card-body">
              <ul>
                <Items items={this.state.items} />
              </ul>
            </div>
            <div className="card-footer">
              <Tags tags={this.state.tags} />
            </div>
          </div>
        </div>
    );
  }

  componentDidMount() {
    this.fetchListTags(this.props.list.id);
    this.fetchListItems(this.props.list.id);
  }
}
