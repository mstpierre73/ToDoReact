import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDoForm from './AddToDoForm';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []}
        this.createNewTask = this.createNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    updateTask(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos})
    }

    createNewTask(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    removeTask(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo 
                task={todo.task} 
                key={todo.id}
                id={todo.id}
                remove={this.removeTask}
                update={this.updateTask}
                />
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