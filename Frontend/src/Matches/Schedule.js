import "./Schedule.css";
import MatchCard from "./Card/MatchCard";
const Shedule = () => {
  return (
    <>
      <div className="dummydiv"></div>
      <div className="schedule">
        <div className="schedulebar">
          <div className="results">Results</div>
          <div className="today">Today</div>
          <div className="upcoming">Upcoming</div>
        </div>
        <div className="matches">
          <MatchCard></MatchCard>
          <MatchCard></MatchCard>
          <MatchCard></MatchCard>
          <MatchCard></MatchCard>
          <MatchCard></MatchCard>
          <MatchCard></MatchCard>
        </div>
      </div>
    </>
  );
};

export default Shedule;
