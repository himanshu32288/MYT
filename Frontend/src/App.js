import "./App.css";
import Navbar from "./Navigation/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./Player/Player";
import Schedule from "./Matches/Schedule";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Schedule />} />
            <Route path="/player" element={<Player />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
