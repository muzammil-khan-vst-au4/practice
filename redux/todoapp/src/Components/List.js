import React, { Component } from 'react'
import {connect} from 'react-redux'

class List extends Component {
    handleDelete = (id) => {
        this.props.deleteTodo(id)
    }

    render() {
    const {todos} = this.props
    let list = todos.length ? (todos.map((todo, index) => {
        return <div key={index} className="collection-item" onClick={()=>{this.handleDelete(index)}}>{todo}</div>
    })) : (<div className="collection-item">No Todos Left</div>)

    return (
        <div className="collection">
            {list}        
        </div>
    )
   }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo : (id) => {dispatch({type: "DELETE_TODO", id: id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)