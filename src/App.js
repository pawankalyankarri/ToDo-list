import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setList([...list, todo]);
      setTodo("");
    }
  };
  const handleRemove = (index) => {
    console.log("hi");
    setList(list.filter((e, i) => i !== index));
  };

  return (
    <div className="container mt-5 w-50">
      <h2 className="text-center mb-3">Todo - List</h2>

      <form onSubmit={addTodo} className="input-group">
        <input
          type="text"
          className="form-control"
          value={todo}
          placeholder="Enter Your Task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-primary">+</button>
      </form>

      <ul className="list-group">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {item}
              <button
                style={{ borderWidth: "0", backgroundColor: "inherit" }}
                type="button"
                onClick={() => handleRemove(index)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
