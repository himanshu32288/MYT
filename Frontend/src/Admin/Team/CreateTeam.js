import { useFormik } from "formik";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateTeam.css";
import { useHttpClient } from "../../shared/hook/http-hook";
const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "name is required";

  if (!values.shortname)
    errors.shortname = "Short name is required is required";
  else if (values.shortname.length < 3 || values.shortname.length > 3)
    errors.shortname = "shortname should be of 3 character";
  return errors;
};

const CreateTeam = () => {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      shortname: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { sendRequest } = useHttpClient();
  const searchRecords = async () => {
    const data = await sendRequest(
      `http://localhost:5000/api/player/recent/search/${search}`,
      "GET"
    );
    setRecord(data);
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
        <button type="submit">Submit</button>
      </form>
      <h4 className="mb-3 text-center mt-4">Search Records in MERN</h4>
      <div class="form-outline">
        <input
          type="text"
          id="form1"
          onKeyUp={searchRecords}
          onChange={(e) => setSearch(e.target.value)}
          class="form-control"
          placeholder="Search Player"
          style={{ backgroundColor: "#ececec" }}
        />
      </div>
    </>
  );
};

export default CreateTeam;
