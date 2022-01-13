import { useFormik } from "formik";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateTeam.css";
import { useHttpClient } from "../../shared/hook/http-hook";
import TeamMember from "./TeamMember";

const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "name is required";

  if (!values.shortname)
    errors.shortname = "Short name is required is required";
  else if (values.shortname.length < 3 || values.shortname.length > 3)
    errors.shortname = "shortname should be of 3 character";
  return errors;
};
function areEqual(prevProps, nextProps) {
  return prevProps.teamPlayer.length === nextProps.teamPlayer.length;
}
const UpdateTeam = React.memo((props) => {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]);
  const [teamPlayer, setTeamPlayer] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: props.team.name,
      shortname: props.team.shortname,
    },
    validate,
    onSubmit: (values) => {
      const players = [];
      for (let x of teamPlayer) {
        players.push(x._id);
      }
      const data = { ...values, players };
      alert(JSON.stringify(data, null, 2)); //post
    },
  });
  const { sendRequest } = useHttpClient();

  const searchRecords = async () => {
    if (search.trim().length === 0) {
      setRecord([]);
      return;
    }
    const data = await sendRequest(
      "http://localhost:5000/api/player/recent/search/" + search.trim()
    );
    setRecord(data.players);
  };

  const addPlayer = (player) => {
    for (let x of teamPlayer) {
      if (x._id === player._id) return;
    }
    setTeamPlayer((prev) => {
      return [...prev, player];
    });
  };
  const deletePlayer = (id) => {
    setTeamPlayer((prev) => {
      return prev.filter((item) => {
        return item._id !== id;
      });
    });
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="create_team_form">
        <label htmlFor="name">Team Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="shortname">Short Name {search}</label>
        <input
          id="shortname"
          name="shortname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.shortname}
        />
        {formik.touched.shortname && formik.errors.shortname ? (
          <div>{formik.errors.shortname}</div>
        ) : null}
        <div className="selected_player_container">
          <TeamMember teamPlayer={teamPlayer} deletePlayer={deletePlayer} />
        </div>
        <button type="submit">Create team</button>
      </form>

      <h4 className="mb-3 text-center mt-4">Search Records in MERN</h4>
      <div className="form-outline">
        <input
          type="text"
          id="form1"
          onKeyUp={searchRecords}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          placeholder="Search Player"
          style={{ backgroundColor: "#ececec" }}
          autoComplete="off"
        />
      </div>
      <ul>
        {record.map((r) => {
          return (
            <div className="searchplayer" key={r._id}>
              <li>{r?.name}</li>
              <button
                onClick={() => {
                  addPlayer(r);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}, areequal);

export default UpdateTeam;
