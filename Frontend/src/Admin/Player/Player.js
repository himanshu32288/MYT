import { useState } from "react";
import { useHttpClient } from "../../shared/hook/http-hook";
const Player = () => {
  const [recent, setRecent] = useState([
    {
      team1: "",
      team2: "",
      points: "",
      date: "",
    },
  ]);
  const { sendRequest } = useHttpClient();
  const [playerName, setPlayerName] = useState("");
  const addfield = (e) => {
    e.preventDefault();
    setRecent((prev) => {
      return [...prev, { team1: "", team2: "", points: "", date: "" }];
    });
  };
  const handeleSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({ name: playerName, recent: recent });
    console.log(data);
    await sendRequest("http://localhost:5000/api/player/fantasy", "POST", data);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    let list = [...recent];
    list[index][name] = value;
    setRecent(list);
  };
  const nameHandler = (e) => {
    const { value } = e.target;
    setPlayerName(value);
  };
  return (
    <>
      {/* <pre>{playerName}</pre> */}
      {/* <pre>{JSON.stringify(recent, undefined, 2)}</pre> */}
      <form onSubmit={handeleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" val={playerName} onChange={nameHandler} />

        <h2>Recent</h2>
        {recent.map((val, i) => {
          return (
            <div className="recent" key={i}>
              <label htmlFor={`team1${i}`}>Team1</label>
              <input
                type="text"
                id={`team1${i}`}
                name="team1"
                value={val.team1}
                onChange={(e) => changeHandler(e, i)}
              />
              <label htmlFor={`team2${i}`}>Team2</label>
              <input
                type="text"
                name="team2"
                id={`team2${i}`}
                value={val.team2}
                onChange={(e) => changeHandler(e, i)}
              />
              <label htmlFor="point">Point</label>
              <input
                type="number"
                name="points"
                id={`points${i}`}
                value={val.points}
                onChange={(e) => changeHandler(e, i)}
              />
              <label htmlFor="date">Date</label>
              <input
                name="date"
                id={`date${i}`}
                value={val.date}
                type="date"
                onChange={(e) => changeHandler(e, i)}
              />
              {/* <label htmlFor={`date${i}`}>Date</label>
            <input
              type="date"
              name="date"
              id={`date${i}`}
              index={i}
              value={recent[i].date}
              onChange={changeHandler} */}
              {/* /> */}
            </div>
          );
        })}
        <button onClick={addfield}>+</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Player;
