import moment from "moment/moment";
import { useState, useEffect } from "react";
import "./ToDo.css";
import TodoForm from "./TodoForm";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineFormatStrikethrough } from "react-icons/md";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(null);
  console.log(todos);
  const handleEditClick = (id) => {
    setEditingId(id);
    setIsEdit(true);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSaveClick = (editedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editingId) {
        return { ...todo, task: editedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setIsEdit(false);
    setEditingId(null);
  };

  // Add button
  const addTask = (userInput, selectedDate) => {
    if (userInput && selectedDate) {
      const newItem = {
        id: Math.random(),
        task: userInput,
        complete: false,
        isEditing: false,
        date: moment(selectedDate).format("L"), // конвертируем дату в нужный формат
      };
      setTodos([...todos, newItem]);
    }
  };

  // delete button
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  // complete button
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Cписок задач {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask} handleSaveClick={handleSaveClick} />
      {todos.map((todo) => (
        <div key={todo.id} className="item-todo">
          <div className={todo.complete ? "item-text strike" : "item-text"}>
            {isEdit && editingId === todo.id ? (
              <form onSubmit={() => handleSaveClick(todo.task)}>
                <input
                  className="editinput"
                  type="text"
                  value={todo.task}
                  onChange={(e) =>
                    setTodos(
                      todos.map((item) =>
                        item.id === todo.id
                          ? { ...item, task: e.target.value }
                          : item
                      )
                    )
                  }
                />
                <button type="submit" className="btnDel">
                  Save Edit
                </button>
              </form>
            ) : (
              todo.task
            )}
          </div>
          <div className="item-buttons">
            {!isEdit && (
              <>
                <span className="todo_date">{todo.date}</span>
                <button
                  onClick={() => handleEditClick(todo.id)}
                  className="btnDel"
                >
                  <AiFillEdit />
                </button>
                <button className="btnDel" onClick={() => removeTask(todo.id)}>
                  <AiFillDelete />
                </button>
                <button
                  className="btnDel"
                  onClick={() => handleToggle(todo.id)}
                >
                  <MdOutlineFormatStrikethrough />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
