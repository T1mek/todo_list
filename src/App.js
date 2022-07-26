import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo)=>todo.id !== id)])
  };
  const handleToggle = (id) => {
    setTodos([...todos.map((todo)=>todo.id===id ? {...todo,complete: !todo.complete}:{...todo})])
  };

  return (
    <div className="App">
      <header>
        <h1 >Список задач:{todos.length} </h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
        <ToDo
          todo={todo}
          toggleTask={handleToggle}
          removeTask={removeTask}
          key={todo.id}
        />
        )
      })}
    </div>
  );
}

export default App;
