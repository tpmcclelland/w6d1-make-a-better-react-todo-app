import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.markDone = this.markDone.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.clearList = this.clearList.bind(this)
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
            this.addTodo()
        }
    }

    markDone(currentTodoIndex) {
        let updatedTodos = this.state.todos
        updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done

        localStorage.setItem('todos', JSON.stringify(updatedTodos))

        this.setState({
            todos: updatedTodos
        })
    }

    addTodo() {
        if (this.state.newTodo === '') {
            return
        }

        //can't modify state directly, make copy of the item from state
        let updatedTodos = this.state.todos
        //push new value with other properties as needed
        updatedTodos.push( {
            text: this.state.newTodo,
            done: false
        })

        //set order and store locally
        updatedTodos = _.orderBy(updatedTodos, ['text'])
        localStorage.setItem('todos', JSON.stringify(updatedTodos))

        //Set the new state of the component with the new value which re-renders
        this.setState({
            todos: updatedTodos,
            newTodo: ''
        })
    }

    componentDidMount() {

        if (localStorage.getItem('todos') !== null) {
            let todos = JSON.parse(localStorage.getItem('todos'))

            this.setState({
                todos: todos
            })
        }
    }

    clearList() {
        localStorage.removeItem('todos')
        this.setState({
            todos: []
        })
    }

    render() {
        var TodoItems = this.state.todos.map((item, i) => {
            return <TodoItem item={item} key={i} markDone={() => this.markDone(i)}/>
        })


        return <div>
        <div className="form-inline text-center">
            <div className="form-group">
                <label className="sr-only" htmlFor="todoInput">Todo Item</label>
                <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="Add Todo" onChange={this.typing} value={this.state.newTodo} onKeyPress={this.enter} />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-success btn-lg" onClick={this.addTodo}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add</button>
                </span>
                </div>
            </div>
            <button type="button" className="btn btn-danger btn-lg margin-left" onClick={this.clearList}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span>  Clear list</button>
        </div>
        <br /><br />
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Todo List</h3>
                </div>
            <div className="panel-body">
                <ul className="list-group">
                    {TodoItems}
                </ul>
            </div>
        </div>
    </div>
    }
}

export default Todos
