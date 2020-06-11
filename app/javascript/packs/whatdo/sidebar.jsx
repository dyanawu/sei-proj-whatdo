import React from 'react'
import ReactDOM from 'react-dom'

const Sidebar = props => (
  <p className="text-danger">
    someday we'll be a sidebar if we're very good
  </p>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Sidebar/>,
    document.getElementById('sidebar'),
  )
})
