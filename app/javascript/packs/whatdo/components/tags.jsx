import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

export default class Tags extends Component {
  render() {
    let tags = this.props.tags || [];
    const tagDots = tags.map(t => {
      return (
        <Fragment key={t.id}
>
          <span
            className="badge badge-pill badge-light"
          >
            {t.name}
          </span>
          <span>&nbsp;</span>
        </Fragment>
      )
    });

    return(
      <>
      {tagDots}
      </>
    );
  }
}
