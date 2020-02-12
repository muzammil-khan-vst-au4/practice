import React from 'react'

const List = ({todos, deleteTodo}) => {
    let list = todos.length ? (todos.map((todo, index) => {
        return <div key={index} className="collection-item" onClick={() => {deleteTodo(index)}}>{todo}</div>
    })) : (<div className="collection-item">No Todos Left</div>)

    return (
        <div className="collection">
            {list}        
        </div>
    )
}

export default List