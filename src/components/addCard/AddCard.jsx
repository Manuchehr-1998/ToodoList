import { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "../card/Card.css";

const AddCard = ({ handleCard }) => {
  const [newCard, setNewCard] = useState({
    id: crypto.randomUUID(),
    img: "",
    fulName: "",
    gender: "",
    education: "",
    job: "",
  });
  const addCardNew = (key) => (e) => {
    setNewCard({ ...newCard, [key]: e.target.value });
  };

  const clearNewCard = () => {
    setNewCard({
      id: crypto.randomUUID(),
      img: "",
      fulName: "",
      gender: "",
      education: "",
      job: "",
    });
  };

  const handleAddCard = () => {
    handleCard(newCard);
    clearNewCard();
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <div className="flex  w-[100%] justify-center border-teal-900 p-2">
      <div className="flex gap-x-2 gap-y-2 flex-wrap w-[15%]  border-gray-900">
        <button
          onClick={handleAddCard}
          className="bg-gray-900 hover:bg-gray-900 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <AiFillFileAdd />
          Card
        </button>
        <input
          onChange={addCardNew("fulName")}
          className="bg-gray-800  text-white"
        />
        <input
          onChange={addCardNew("education")}
          className="bg-gray-800 text-white"
        />
        <input
          onChange={addCardNew("job")}
          className="bg-gray-800 text-white"
        />
        <input
          onChange={addCardNew("img")}
          className="bg-gray-800 text-white"
        />
      </div>
    </div>
  );
};
export default AddCard;
