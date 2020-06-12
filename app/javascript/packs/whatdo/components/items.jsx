import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Items extends Component {
    render() {
    let items = this.props.items || [];
    const itemDots = items.map(i => {
      return (
        <li key={i.id}>{i.name} </li>
      )
    });

    return(
      <>
      {itemDots}
      </>
    );
  }
}

