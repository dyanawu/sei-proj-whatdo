import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Sidebar extends Component {
  clickHandler(e) {
    this.props.fetchListsByTag(e.target.id);
  }

  render() {
    const tags = this.props.tags;
    const tagList = tags.map(t => {
      return (
        <a
          key={t.id + t.name}
          id={t.id}
          href="#"
          className="nav-item nav-link text-muted"
          onClick={(e) => this.clickHandler(e)}
        >
          {t.name}
        </a>
      )
    });
    return (
      <>
        <a
          href="#"
          className="nav-item nav-link text-muted"
          onClick={(e) => this.props.fetchLists()}
        >
          all lists
        </a>
        <nav className="nav flex-column">
          {tagList}
        </nav>
        <a
          href="#"
          className="nav-item nav-link text-muted"
          onClick={(e) => this.props.fetchUntaggedLists()}
        >
          untagged lists
        </a>
        <a
          href="#"
          className="nav-item nav-link text-muted"
          onClick={(e) => console.log(e)}
        >
          TODO: edit tags
        </a>
      </>
    );
  }
}
