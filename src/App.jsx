import { useState } from "react";
import "./App.css";

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToList = () => {
    if (inputValue.trim() !== "") {
      setToDo([...toDo, {id: Date.now(), text: inputValue}]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddToList();
    }
  };

  const handleToggleDone = (id) => {
    const updatedToDo = toDo.map((todo) =>
      todo.id === id ? {...todo, done: !todo.done} : todo
    );
    setToDo(updatedToDo);
  };

  const completeTasks = toDo.filter((todo) => todo.done);
  const remainingTasks = toDo.filter((todo) => !todo.done);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="toDoInput">
        <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddToList();
          }
        }}
        placeholder="To do..."
        />
        <button onClick={handleAddToList}>Add to List</button>
      </div>

      
    </div>
  )

}
