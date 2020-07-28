import React, { Component } from 'react';
import { uuid } from 'uuidv4';

class AddToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.create({...this.state, id: uuid()});
        this.setState({task:''});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Task</label>
                <input 
                    type='text' 
                    placeholder='New task' 
                    id='task' 
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChange}
                    />
                <button>Add Task</button>
            </form>
        )
    }
}

export default AddToDoForm;