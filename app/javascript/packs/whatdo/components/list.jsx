import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Items from './items'
import Tags from './tags'
import ListModal from './listmodal'

export default class List extends Component {
  constructor() {
    super();

    this.state = {
      tags: [],
      items: [],
      currentList: undefined
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

  render() {
    const l = this.props.list;
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-1"
      >
        <div
          className="card list-card w-90"
        >
          <div
            className="card-header p-1"
          >

            <ListModal
              list={l}
              items={this.state.items}
              tags={this.state.tags}
            />

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
    this.setState({currentList: this.props.list.id});
  }
}
