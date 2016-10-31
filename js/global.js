import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
function renderView() {
    ReactDOM.render(<Todos />, document.getElementById('todos'))
}

renderView()
