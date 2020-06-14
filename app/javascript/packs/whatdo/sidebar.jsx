import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ModalForm from './components/modalform'

export default class Sidebar extends Component {
  clickHandler(e) {
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
        <nav className="nav nav-pills flex-column">
          <ModalForm
            setList={(e) => this.props.setList(e)}
            addList={() => this.props.addList()}
          />
        <a
          href="#"
          className="nav-item nav-link text-muted"
          onClick={() => this.props.fetchItems()}
        >
          all items
        </a>
        {listEles}
      </nav>
      </>
    );
  }
}
