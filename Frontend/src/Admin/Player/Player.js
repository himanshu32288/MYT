import { useState } from "react";

const Player = () => {
  const [recent, addRecent] = useState([
    {
      team1: "halllo",
      team2: "",
    },
  ]);
  const addfield = (e) => {
    e.preventDefault();
    addRecent((prev) => {
      return [...prev, { team1: "", team2: "", points: "" }];
    });
  };
  const handeleSubmit = (e) => {
    e.preventDefault();
    console.log(recent);
  };

  const changeHandler = (e) => {
    console.log(e.target.ok);
  };
  return (
    <form onSubmit={handeleSubmit}>
      <label htmlFor="name">Name</label>
      <h2>Recent</h2>
      {recent.map((val, i) => {
        return (
          <div className="recent">
            <label htmlFor={`team1${i}`}>Team1</label>
            <input
              type="text"
              id={`team1${i}`}
              name="team1"
              value={recent[i].team1}
              onChange={changeHandler}
            />
            <label htmlFor={`team2${i}`}>Team2</label>
            <input
              type="text"
              name="team2"
              id={`team2${i}`}
              index={i}
              value={recent[i].team2}
              onChange={changeHandler}
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
  );
};

export default Player;
