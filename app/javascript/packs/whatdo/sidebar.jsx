import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Sidebar extends Component {
  render() {
    const tags = this.props.tags;
    const tagList = tags.map(t => {
      return (
        <>
          <a
            key={t.id + t.name}
            id={t.id}
            href="#"
            className="nav-item nav-link"
            onClick={(e) => this.props.fetchListsByTag(e.target.id)}
          >
            {t.name}
          </a>
        </>
      )
    });
    return (
      <>
        <h4>tags</h4>
          <a
            href="#"
            className="nav-item nav-link"
            onClick={(e) => this.props.fetchLists()}
          >
            all lists
          </a>
        <nav className="nav flex-column">
          {tagList}
        </nav>
      </>
    );
  }
}
