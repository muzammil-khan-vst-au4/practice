import React, { Component } from 'react'
import {connect }from 'react-redux'

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
        //this.props.addTodo(this.state.task)
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

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (task) => {dispatch({type:"ADD_TODO", task:task})}
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)