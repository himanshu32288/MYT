import { Card } from "@mui/material";
import JeepLogo from "../img/Jeep-Logo.png";
import Team1 from "../img/team1.png";
import Team2 from "../img/team2.png";
import "./MatchCard.css";
const MatchCard = () => {
  return (
    <Card sx={{ maxWidth: 326, m: 2 }}>
      <div className="card">
        <div className="match-item header">
          <div className="format">T20</div>
          <img src={JeepLogo} alt="" className="logo" />
        </div>
        <div className="match-item mid">
          <div className="team">
            <img src={Team1} alt="" className="team-logo" />
            <div className="team-name">Ruwi Rangers</div>
          </div>
          <div className="team">
            <img src={Team2} alt="" className="team-logo" />
            <div className="team-name">Ghubrah Giants</div>
          </div>
        </div>
        <div className="match-item footer">
          <div className="footer">
            Bousher Busters beat Khuwair Warriors by 3 wickets
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MatchCard;
