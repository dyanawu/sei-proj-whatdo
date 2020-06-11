import React from 'react'
import ReactDOM from 'react-dom'

const Todos = props => (
  <>
    <div>THIS IS YOUR TODO LIST SOMEDAY</div>
    <div className="text-warning">Now we see if bootstrap is up</div>
    <p>And fontawesome yaaaay <i className="far fa-smile-beam"></i></p>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Todos/>,
    document.getElementById('todos'),
  )
})
