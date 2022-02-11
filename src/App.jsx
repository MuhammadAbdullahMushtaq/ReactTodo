import React, { useState } from "react";
import "./App.css";
function App() {

  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addtodo = () => {
    console.log(inputValue);
    todo.push(inputValue);
    setTodo([...todo]);
  };
  return (
    <div
      className="Mainbox"
    >
      <h1 className="text-center mt-5">TODO LIST</h1>
      <div className="w-50 mx-auto">
        <input
          type="text"
          placeholder="ENTER TODO..."
          className="my-5 form-control input-group"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-info mx-2" onClick={addtodo}>
          ADD TODO
        </button>
        <button className="btn btn-danger">DELETE TODO</button>
      </div>
      <section className="container">
        {todo.map((value, index, array) => {
          return <li key={index}> {value} </li>;
        })}
      </section>
    </div>
  );
}

export default App;