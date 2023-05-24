import React, { useState } from "react";
import "../card/Card.css";
// komponent card
const EditCard = ({ id, img, fulName, education, job, deleteCard }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [cardFulName, setCardFulName] = useState(fulName);
  const [cardEducation, setCardEducation] = useState(education);
  const [cardJob, setCardJob] = useState(job);

  //Обработчик клика по кнопке редактирования
  const handleEditClick = () => {
    setIsEdit(true);
  };
  //Обработчик клика по кнопке сохранения изменений
  const handleSaveClick = () => {
    setIsEdit(false);
  };

  return (
    <div className="card">
      {isEdit ? (
        <div>
          <input
            value={cardFulName}
            onChange={(e) => setCardFulName(e.target.value)}
          />
          <input
            value={cardEducation}
            onChange={(e) => setCardEducation(e.target.value)}
          />
          <input value={cardJob} onChange={(e) => setCardJob(e.target.value)} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <div className="img_container">
            <img src={img} alt="" />
          </div>
          <div className="card_content">
            <div className="card_title">
              <h1>{cardFulName}</h1>
            </div>
            <div className="card_body">
              <p>{cardEducation}</p>
              <p>{cardJob}</p>
            </div>
          </div>

          <div className="btn">
            <button>
              <a href="">Viev more</a>
            </button>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => deleteCard(id)}>delet</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditCard;
