const initState = {
    todos : ["Complete todo", "Make CRUD opertaions app", "redux"]
}

const rootReducer = (state=initState, action) => {
    if(action.type === "ADD_TODO") {
        let newTodo = action.task
        return {
            ...state,
            todos: [...state.todos, newTodo] 
        }
    }
    if(action.type === "DELETE_TODO") {
        let newTodos = state.todos.filter((todo,i) => {
            //console.log(i, todo, action.id)
            return i !== action.id
        })
        return {
            ...state,
            todos : newTodos
        }
    }
    return state
}

export default rootReducer