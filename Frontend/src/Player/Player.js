import "./Player.css";
import { useState, useEffect } from "react";
import { useHttpClient } from "../shared/hook/http-hook";
const Player = () => {
  const [loadedPlayers, setLoadedPlayers] = useState();
  const { sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/player/61d48a0a9120654c4cbc0fb8"
        );

        setLoadedPlayers(responseData);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);
  return (
    <div className="venue-wrapper">
      <div className="venue_card">
        <h1>{loadedPlayers.name}</h1>
      </div>
    </div>
  );
};

export default Player;
