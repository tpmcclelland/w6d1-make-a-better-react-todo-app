import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.markDone = this.markDone.bind(this)
        this.state = {
            newTodo: '',
            todos: []
        }
    }

    typing(e) {
        this.setState({
            newTodo: e.target.value
        })
    }

    enter(e) {
        if (e.key === 'Enter') {
            //can't modify state directly, make copy of the item from state
            let updatedTodos = this.state.todos
            //push new value with other properties as needed
            updatedTodos.push( {
                text: e.target.value,
                done: false
            })

            //Set the new state of the component with the new value which re-renders
            this.setState({
                todos: updatedTodos,
                newTodo: ''
            })
        }
    }

    markDone(currentTodoIndex) {
        let updatedTodos = this.state.todos
        updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        var TodoItems = this.state.todos.map((item, i) => {
            return <TodoItem item={item} key={i} markDone={() => this.markDone(i)}/>
        })

        return <div>
            <input type="text" className="form-control" placeholder="Todo" onChange={this.typing} value={this.state.newTodo} onKeyPress={this.enter} />
            <ul className="list-group">
                {TodoItems}
            </ul>
        </div>
    }


        // return <div className="form-inline text-center">
        //             <div className="form-group">
        //               <label className="sr-only" for="todoInput">Todo Item</label>
        //               <div className="input-group input-group-lg">
        //                     <input type="text" className="form-control" placeholder="Todo" onChange={this.typing} value={this.state.newTodo} onKeyPress={this.enter} />
        //                 <span className="input-group-btn">
        //                   <button type="button" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span>  Add</button>
        //                 </span>
        //               </div>
        //             </div>
        //             <button type="button" className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span>  Clear list</button>
        //           </div>
        //           <div className="panel panel-primary">
        //           <div className="panel-heading">
        //             <h3 className="panel-title">Todo List</h3>
        //           </div>
        //           <div className="panel-body">
        //             <ul className="list-group">
        //                 {TodoItems}
        //             </ul>
        //           </div>
        //       </div>
        // }
}

export default Todos
