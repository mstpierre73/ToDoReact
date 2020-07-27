import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDoForm from './AddToDoForm';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: [{task: 'Walk the fish'}, {task: 'Feed the Goblin'}]}
        this.createNewTask = this.createNewTask.bind(this);
    }

    createNewTask(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo task={todo.task} />
        })

        return(
            <div>
                <h1>Todo List</h1>
                <AddToDoForm create={this.createNewTask}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default ToDoList;