import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Tags extends Component {
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
