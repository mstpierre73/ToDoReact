import React, { Component } from 'react';

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
                <div>
                    <form onSubmit={this.handleEdit}>
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
                <div>
                    <li>{this.props.task}</li>
                    <button onClick={this.toogleForm}>Edit</button>
                    <button onClick={this.handleRemove}>Delete</button>
                </div>
            )
        }
        return result;
    }
}

export default ToDo;
