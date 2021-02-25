import React from 'react';
import '../components/Todo.css'

const Todo = (props) => {

    return(
        <div onClick={()=> {
            props.dispatch({type: 'TOGGLE_TODO', payload: props.task.id})
        }} className={`${props.task.completed ? "completed" : ""}`}>
            <p>{props.task.item}</p>
        </div>
    )
}

export default Todo;