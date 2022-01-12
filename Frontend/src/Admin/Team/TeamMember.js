import "./TeamMember.css";
const TeamMember = (props) => {
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
};

export default TeamMember;
