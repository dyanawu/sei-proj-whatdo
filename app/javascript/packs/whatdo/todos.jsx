import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Tags extends Component {
  render() {
    let tags = this.props.tags || [];
    const tagDots = tags.map(t => {
      return (
        <span key={t.id}>{t.name} </span>
      )
    });

    return(
      <>
      {tagDots}
      </>
    );
  }
}


class Todo extends Component {
  constructor() {
    super();

    this.state = {
      tags: []
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


  render() {
    let l = this.props.todo;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-1" key={l.id}>
          <div
            id={l.id}
            className="card list-card"
          >
            <div className="card-header">
              <h3 className="card-title">{l.name}</h3>
            </div>
            <div className="card-body">
              <Tags tags={this.state.tags} />
            </div>
          </div>
        </div>
    );
  }

  componentDidMount() {
    this.fetchListTags(this.props.todo.id);
  }
}

export default class Todos extends Component {
  render() {
    const lists = this.props.lists;

    const listCards =  lists.map(l => {
      return (
        <Todo todo={l}
              key={l.id}/>
      );
    });

    return (
      <div className="row my-3 px-3">
        {listCards}
      </div>
    );
  }
}
