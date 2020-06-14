import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Sidebar extends Component {
  clickHandler(e) {
    console.log(e.target);
    console.log(e.target.id);
    this.props.fetchListItems(e.target.id);
  }

  render() {
    const lists = this.props.lists;
    const listEles = lists.map(l => {
      return (
        <a
          key={l.id + l.name}
          id={l.id}
          href="#"
          className="nav-item nav-link text-muted"
          onClick={(e) => this.clickHandler(e)}
        >
          {l.name}
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
          {listEles}
        </nav>
      </>
    );
  }
}
