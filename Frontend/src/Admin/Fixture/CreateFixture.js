import "./CreateFixture.css";
const CreateFixture = () => {
  return (
    <>
      <div className="fixture_container">
        <div className="f-team1">
          {" "}
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="f-right">
          <div className="team1">Team1</div>
          <div className="vs">VS</div>
          <div className="team2">Team2</div>
        </div>
      </div>
    </>
  );
};

export default CreateFixture;
