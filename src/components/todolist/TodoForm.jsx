import { useState } from "react";
import "./ToDo.css";
const TodoForm = ({ handleSaveClick, addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveClick(text, date);
    setText("");
    setDate(new Date());
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Введите значение"
          className="inp"
        />
        <div>
          <input
            type="date"
            id="date"
            onChange={(e) => setDate(new Date(e.target.value))}
            className="inp"
          />
        </div>

        <button
          onClick={() => addTask(text, date)}
          onKeyDown={handleKeyDown}
          className="btnSave"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default TodoForm;
