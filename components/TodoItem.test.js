import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import TodoItem from './TodoItem'

it('renders without crashing', () => {
  var item = {
    text: 'Test',
    done: false
  }
  shallow(<TodoItem item={item} />)
})

// it('Should have Test displayed', () => {
//
//   var item = {
//     text: 'Test',
//     done: false
//   }
//
//   const todoItem = shallow(<TodoItem item={item} />)
//   console.log(todoItem)
//   // expect(todoItem.text).toEqual('Test')
//
//   // expect(todoItem.checked).toBe(false)
//   // todoItem.find('input').simulate('change')
//   // expect(todoItem.checked).toBe(true)
// })
