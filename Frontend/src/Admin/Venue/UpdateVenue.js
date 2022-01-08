import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "name is required";
  if (!values.description) errors.description = "description is required";
  else if (values.description.length < 10)
    errors.description = "description should be of minimum 10 chracter";
  if (!values.pitchtype) errors.pitchtype = "pitch type is required";
  else if (values.pitchtype.length < 3)
    errors.pitchtype = "pitch type should be of minimum 3 chracter";
  return errors;
};

const UpdatePlace = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      pitchtype: "",
      pitchfavour: "",
      team_batting_first_wins: "",
      avgscore: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Venue Name</label>
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

      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}

      <label htmlFor="pitchtype">Pitch Type</label>
      <input
        id="pitchtype"
        name="pitchtype"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pitchtype}
      />
      {formik.touched.pitchtype && formik.errors.pitchtype ? (
        <div>{formik.errors.pitchtype}</div>
      ) : null}
      <label htmlFor="pitchfavour">Pitch Favour</label>
      <input
        id="pitchfavour"
        name="pitchfavour"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pitchfavour}
      />
      <label htmlFor="avgscore">Average Score</label>
      <input
        id="avgscore"
        name="avgscore"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.avgscore}
      />
      <label htmlFor="team_batting_first_wins">Team Batting First Wins</label>
      <input
        id="team_batting_first_wins"
        name="team_batting_first_wins"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.team_batting_first_wins}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdatePlace;
