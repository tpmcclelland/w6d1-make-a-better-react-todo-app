import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Todos from './Todos'

it('renders without crashing', () => {
  var todos = ['test 1', 'test 2']
  shallow(<Todos todos={todos} />);
})

it('displays Todo List in the header', () => {
  var todos = ['test 1', 'test 2']
  const wrapper = shallow(<Todos todos={todos} />)
  const header = <h3 className="panel-title">Todo List</h3>
  expect(wrapper.contains(header)).toEqual(true)
})
