import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDoForm from './AddToDoForm';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []}
        this.createNewTask = this.createNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toogleCompletedTask = this.toogleCompletedTask.bind(this);
    }

    toogleCompletedTask(id) {
        const completedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: completedTodos})
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
                completed={todo.completed}
                remove={this.removeTask}
                update={this.updateTask}
                toogleCompleted={this.toogleCompletedTask}
                />
        })

        return(
            <div className='TodoList'>
                <h1>Todo List<span>A Simple React Todo List App</span></h1>
                <ul>
                    {todos}
                </ul>
                <AddToDoForm create={this.createNewTask}/>
            </div>
        )
    }
}

export default ToDoList;