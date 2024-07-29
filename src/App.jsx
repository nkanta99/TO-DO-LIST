import { useState } from "react";
import "./App.css";

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
}
