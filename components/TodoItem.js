import React, { Component } from 'react'

const TodoItem = (props) => <a href="#" className="list-group-item" onClick={props.markDone}>
              <input type="checkbox" checked={props.item.done} />
               <span style={{textDecoration:props.item.done?'line-through':''}}> {props.item.text}</span>
              </a>

export default TodoItem
