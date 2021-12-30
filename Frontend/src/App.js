import "./App.css";
import Navbar from "./Navigation/Navbar";
import Upcoming from "./Upcoming/Upcoming";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./Player/Player";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Upcoming />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
