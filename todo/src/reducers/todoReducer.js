import { ADD_TODO, TOGGLE_TODO} from "./../actions/todoActions";

export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
}

const newTodoText = () => {

}

const todoReducer = (state, action) => {

    switch(action.type) {
        case(ADD_TODO):
            return {...state, };
        case(TOGGLE_TODO):
            return {...state}
        default:
            return state;
    }
}

export default todoReducer;