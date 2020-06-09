import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => (
  <>
    <div>Hello {props.name}! THIS IS YOUR TODO LIST SOMEDAY</div>
    <div className="text-info">Now we see if bootstrap is up</div>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.getElementById('root'),
  )
})
