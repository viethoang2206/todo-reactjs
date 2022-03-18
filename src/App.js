import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
      id: Math.random(),
      content: "123",
      status: false,
    },
  ]);
  const [selectedTodo, setselectedTodo] = useState(null);
  const [checkStatus, setCheckStatus] = useState(false);
  const [checkAllStatus, setChecAllkStatus] = useState(false);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTodo) {
      setTodo([...todo, { id: Date.now(), content: input, status: false }]);
      setInput("");
    } else {
      //setTodo(newTodo);
      const newTodo = todo.map((val) => {
        if (val.id === selectedTodo.id)
          return {
            ...selectedTodo,
            content: input,
          };
        return val;
      });
      setTodo(newTodo);
      setInput("");
      setselectedTodo(null);
    }
  };

  const handleDelete = (id) => {
    const newTodo = todo.filter((val) => {
      return val.id != id;
    });
    setTodo(newTodo);
  };

  const handleUpdate = (id) => {
    const idx = todo.findIndex((val) => val.id === id);
    setInput(todo[idx].content);
    setselectedTodo(todo[idx]);
  };

  const handleCancel = () => {
    setselectedTodo(null);
    setInput("");
  };

  const handleCheck = (id) => {
    const idx = todo.findIndex((val) => val.id === id);
    const newTodo = todo.map((val, index) => {
      if (index === idx) {
        if (val.status) {
          return {
            ...val,
            status: false,
          };
        } else {
          return {
            ...val,
            status: true,
          };
        }
      }
      return val;
    });
    setTodo(newTodo);
  };

  const toggleClass = () => {
    setCheckStatus(!checkStatus);
  };

  const handleDelAll = () => {
    setTodo([]);
  };

  const handleCheckAll = () => {
    const newTodo = todo.map((val) => {
      if (checkAllStatus) {
        val.status = false;
        setChecAllkStatus(false);
      } else {
        val.status = true;
        setChecAllkStatus(true);
      }

      return val;
    });
    console.log(newTodo);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <div className="todo">
        <h2>TODO LIST</h2>
        <form action="" onSubmit={handleSubmit}>
          <input value={input} onChange={handleChange} type="text" />
          <button>{selectedTodo ? "Update" : "Add"}</button>
          {selectedTodo && <button onClick={handleCancel}>Cancel</button>}
        </form>
        <ul>
          {todo.length ? (
            todo.map((val) => (
              <li
                className={val.status ? "finish" : null}
                key={val.id}
                onClick={toggleClass}
              >
                {val.content}
                <div className="icons">
                  <i
                    onClick={() => handleCheck(val.id)}
                    className="icon fa-solid fa-check"
                  ></i>
                  <i
                    onClick={() => handleUpdate(val.id)}
                    className="icon fa-solid fa-pen-to-square"
                  ></i>
                  <i
                    onClick={() => handleDelete(val.id)}
                    className="icon fa-solid fa-trash"
                  ></i>
                </div>
              </li>
            ))
          ) : (
            <li>No items</li>
          )}
        </ul>
        <div className="all-button">
          <button onClick={handleCheckAll}>
            {checkAllStatus ? "Uncheck all" : "Check all"}
          </button>
          <button onClick={handleDelAll}>Delete all</button>
        </div>
      </div>
    </div>
  );
};

export default App;
