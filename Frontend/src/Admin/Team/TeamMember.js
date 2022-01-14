import "./TeamMember.css";
import React from "react";
function areEqual(prevProps, nextProps) {
  return prevProps.teamPlayer.length === nextProps.teamPlayer.length;
}
const TeamMember = React.memo((props) => {
  return (
    <ul>
      {props.teamPlayer.map((player) => {
        return (
          <div className="selected_player" key={player._id}>
            <li>{player.name}</li>
            <button
              onClick={() => {
                props.deletePlayer(player._id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </ul>
  );
}, areEqual);

export default TeamMember;
