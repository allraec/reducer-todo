import './App.css';
import {useReducer, useState} from 'react';
import todoReducer, { initialState } from './reducers/todoReducer';
import TodoList from './components/TodoList';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "ADD_TODO", payload: newTodo});
    setNewTodo("");
  }
  return (
    <div className="App">
      <div>
        <h2>Aly's Todo List</h2>
        <input onChange={handleChanges} type='text' name='todo' value={newTodo}/>
        <button onClick={handleSubmit}>Add</button>
      </div>
      <TodoList todo={todo} dispatch={dispatch} />
    </div>
  );
}

export default App;
