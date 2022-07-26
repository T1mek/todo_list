import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("")
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleKeyPress = (e) => {
    if(e.key ==="Enter"){
      handleSubmit(e)
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение"
        type="text"
      />
      <button>Сохранить</button>
    </form>
  );
};

export default ToDoForm;
