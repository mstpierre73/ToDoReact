import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toogleForm = this.toogleForm.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToogleCompleted = this.handleToogleCompleted.bind(this);
    }

    handleToogleCompleted() {
        this.props.toogleCompleted(this.props.id)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEdit(event) {
        event.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({isEditing: false})
    }

    toogleForm() {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleRemove() {
        this.props.remove(this.props.id)
    }

    render() {
        let result;
        if(this.state.isEditing){
            result= (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleEdit}>
                        <input 
                            type='text' 
                            value={this.state.task}
                            name='task'
                            onChange={this.handleChange}
                            />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result=(
                <div className='Todo'>
                    <li 
                        className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick={this.handleToogleCompleted}
                    >{this.props.task}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toogleForm}>Edit</button>
                        <button onClick={this.handleRemove}>Delete</button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default ToDo;
