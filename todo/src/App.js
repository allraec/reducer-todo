import './App.css';
import React, { useState, useReducer} from "react";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h2>To Do List</h2>
          <TodoForm />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
