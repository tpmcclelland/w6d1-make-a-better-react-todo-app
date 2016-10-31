import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import TodoItem from './TodoItem'

it('renders without crashing', () => {
  var item = 'test 1'
  shallow(<TodoItem item={item} />)
})
