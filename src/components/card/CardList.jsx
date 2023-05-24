import React, { useState } from "react";
import AddCard from "../addCard/AddCard";
import ComboButtonCard from "../combokeybord/ComboButtonCard";
import EditCard from "./EditCard";
import "./Card.css";
//Компонент списка карточек
const cardPuple = [
  {
    id: 1,
    img: "https://www.w3schools.com/howto/img_avatar.png",
    fulName: "Манучехр Саидов",
    gender: "male",
    education: "Fronten developer",
    job: "unemployed",
  },
  {
    id: 2,
    img: "https://ilmhona.org/static/media/akba.eb889b1a.jpg",
    fulName: "Акбар Хамзаев ",
    gender: "male",
    education: "Фронт-энд разработка-Уровен 1",
    job: "IlmHona Mentor",
  },
  {
    id: 3,
    img: "https://ilmhona.org/static/media/alishe.4813334d.jpg",
    fulName: "Алишер Нарзуллаев",
    gender: "male",
    education: "Фронт-энд разработка-Уровен 1",
    job: "IlmHona Mentor",
  },
  {
    id: 4,
    img: "https://ilmhona.org/static/media/anto.524a6a36.jpg",
    fulName: "Антон Безухов",
    gender: "male",
    education: "ProSkills React.js",
    job: "IlmHona Mentor",
  },
  {
    id: 5,
    img: "https://ilmhona.org/static/media/saidmuhammad.66d528f3.jpg",
    fulName: "Саидмухаммад Хикматулло",
    gender: "male",
    education: "Удалённый Заработка",
    job: "Frilanser",
  },
  {
    id: 6,
    img: "https://ilmhona.org/static/media/fakhriddin.ee1a8ec5.jpg",
    fulName: "Фахриддин Усмонов ",
    gender: "male",
    education: "Фронт-энд разработка",
    job: "В городе Истаравшан",
  },
  {
    id: 7,
    img: "https://ilmhona.org/static/media/bekhruz.5f003fa6.jpg",
    fulName: "Бехруз Усмонов",
    gender: "male",
    education: "Фронт-энд разработка",
    job: "В городе Истаравшан",
  },
  {
    id: 8,
    img: "https://ilmhona.org/static/media/Doni.d7b80e2b.jpg",
    fulName: "Дониёр Сангинов",
    gender: "male",
    education: "Графический дизайн",
    job: "Frilanser",
  },
];
const CardList = () => {
  // sort Name
  const [sortedData, setSortedData] = useState(cardPuple);
  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const nameA = a.fulName.toUpperCase();
      const nameB = b.fulName.toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    setSortedData(sorted);
  };
  // job ilmhona button sort
  const handleFilterJob = (textJob) => {
    const sorteds = cardPuple.filter((card) => card.job === textJob);
    setSortedData(sorteds);

    console.log(setSortedData);
  };

  // Reset
  const handleSortJobReset = () => {
    setSortedData(cardPuple);
    console.log("Ne ra");
  };
  // delet Card
  const deleteCard = (id) => {
    setSortedData(sortedData.filter((card) => card.id !== id));
  };
  const handleCard = (newCard) => {
    setSortedData([...sortedData, newCard]);
  };

  return (
    <div className="pt-4">
      <h1 className="instructor">Инструкторы</h1>
      <ComboButtonCard
        handleSort={handleSort}
        handleFilterJob={handleFilterJob}
        handleSortJobReset={handleSortJobReset}
      />
      <AddCard handleCard={handleCard} />
      <div className="cards">
        {sortedData.map((card) => (
          <EditCard
            deleteCard={deleteCard}
            key={card.id}
            id={card.id}
            img={card.img}
            fulName={card.fulName}
            education={card.education}
            job={card.job}
          />
        ))}
      </div>
    </div>
  );
};
export default CardList;
