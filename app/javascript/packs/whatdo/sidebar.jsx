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
        <h4>
          <a
            href="#"
            className="nav-item nav-link text-muted"
            onClick={(e) => this.props.fetchLists()}
          >
            all lists
          </a>
        </h4>
        <h4>
          <a
            href="#"
            className="nav-item nav-link disabled"
          >
            tags
          </a>
        </h4>
        <nav className="nav flex-column">
          {tagList}
        </nav>
        <h4>
          <a
            href="#"
            className="nav-item nav-link text-muted"
            onClick={(e) => this.props.fetchUntaggedLists()}
          >
            untagged lists
          </a>
        </h4>
        <h4>
          <a
            href="#"
            className="nav-item nav-link text-muted"
            onClick={(e) => console.log(e)}
          >
            TODO: edit tags
          </a>
        </h4>
      </>
    );
  }
}
