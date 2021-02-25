export const initialState = [
    {
        item: 'Add todos',
        completed: false,
        id: 1
    }
]

const todoReducer = (state, action) => {
    switch(action.type){
        case('ADD_TODO'):
            return [...state, {item: action.payload,id: Date()}];
        case('TOGGLE_TODO'):
            return state.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
        case('CLEAR_TODO'):
            return state.filter((todo) => !todo.completed)
        default:
            return state;
    }
}

export default todoReducer;