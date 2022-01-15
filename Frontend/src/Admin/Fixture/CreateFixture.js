import "./CreateFixture.css";
import { useState } from "react";
import { useHttpClient } from "../../shared/hook/http-hook";
const CreateFixture = () => {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]);
  const [teams, setTeams] = useState([]);
  const { sendRequest } = useHttpClient();

  const addTeam = (newteam) => {
    if (teams.length === 2) return;
    setTeams((prev) => {
      return [...prev, newteam];
    });
  };
  const delTeam = (id) => {
    setTeams((prev) => {
      return prev.filter((item) => {
        return item._id !== id;
      });
    });
  };
  const searchRecords = async () => {
    if (search.trim().length === 0) {
      setRecord([]);
      return;
    }
    const data = await sendRequest(
      "http://localhost:5000/api/team/search/" + search.trim()
    );
    setRecord(data.teams);
    console.log(record);
  };
  return (
    <>
      <div className="fixture_container">
        <div className="f-team">
          {" "}
          <input
            className="form-control me-2"
            type="search"
            onKeyUp={searchRecords}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Team"
            autoComplete="off"
            aria-label="Search"
          />
          <div className="team-list"></div>
        </div>
        <div className="f-right">
          <div className="team1">{teams[0] && <h3>{teams[0].name}</h3>}</div>
          <div className="vs">VS</div>
          <div className="team2">Team2</div>
        </div>
      </div>
    </>
  );
};

export default CreateFixture;
