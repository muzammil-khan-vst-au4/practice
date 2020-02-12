import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        task : ""
    }
    handleChange = (e) => {
        this.setState({
            task : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.task)
        this.setState(
           { task : ""}
        )
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Add todos" value={this.state.task} onChange={this.handleChange}/>                
                </form>
            </div>
        )
    }
}

export default AddTodo