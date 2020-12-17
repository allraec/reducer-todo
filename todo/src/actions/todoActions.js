export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export default {
    addTodo: (newTitle)=> {
        return({type: ADD_TODO, payload: newTitle})
    },
    toggleTodo: (isEditing) => {
        return({type: TOGGLE_TODO})
    }
}