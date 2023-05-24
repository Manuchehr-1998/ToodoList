import { Link, Route, Routes } from "react-router-dom";
import CardList from "./components/card/CardList";
import Home from "./components/Home/Home";
import TodoList from "./components/todolist/TodoList";

export default function App() {
  return (
    <div className="Apps">
      <div className="flex justify-center gap-x-2">
        <Link to="/">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Home
          </button>
        </Link>
        <Link to="/ToDoList">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ToDoList
          </button>
        </Link>

        <Link to="/CardList">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            CardList
          </button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToDoList" element={<TodoList />} />
        <Route path="CardList" element={<CardList />} />
      </Routes>
    </div>
  );
}
