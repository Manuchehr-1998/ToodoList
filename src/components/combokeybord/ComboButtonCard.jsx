import "./ComboBtn.css";
import "../card/Card.css";

const ComboButtonCard = ({
  handleSort,
  handleFilterJob,
  cardPuple,
  handleSortJobReset,
}) => {
  return (
    <div className="btn_container">
      <button className="btnhand" onClick={handleSort}>
        SortName
      </button>
      <button
        className="btnhand"
        onClick={() => handleFilterJob("IlmHona Mentor")}
      >
        Job Ilmhona
      </button>
      <button
        className="btnhand"
        onClick={() => handleFilterJob("В городе Истаравшан")}
      >
        Job Istaravshan
      </button>
      <button className="btnhand" onClick={() => handleFilterJob("Frilanser")}>
        Job Frilanser
      </button>
      <button className="btnhand" onClick={handleSortJobReset}>
        Reset
      </button>
    </div>
  );
};
export default ComboButtonCard;
