import "./App.css";
import Navbar from "./Navigation/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./Player/Player";
import Schedule from "./Matches/Schedule";
import Venue from "./Venue/Venue";
import Admin from "./Admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/Venue" element={<Venue />} />
            <Route path="/player" element={<Player />} />
            <Route path="/" element={<Schedule />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
