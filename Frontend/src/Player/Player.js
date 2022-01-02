import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./Player.css";
import CreateNew from "./NewPlayer/NewPlayer";
import MatchCard from "../Matches/Card/MatchCard";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Venue = () => {
  const [newForm, setNewForm] = useState(false);
  const createNew = () => {
    setNewForm((prev) => !prev);
  };
  return (
    <div className="venue-wrapper">
      <div className="bar">
        <div className="search">
          <Search sx={{ color: "primary.main" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="createnew" onClick={createNew}>
          create new
        </div>
      </div>
      {newForm && <CreateNew />}
      {!newForm && (
        <>
          <div className="venue_card">
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
          </div>
        </>
      )}
    </div>
  );
};

export default Venue;
