const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const playerRoutes = require("./routes/playerroutes");
const venueRoutes = require("./routes/venueroutes");
const teamRoutes = require("./routes/teamroutes");
// const fixtureRoutes = require("./routes/fixtureroutes");
app.use(bodyParser.json({ limit: "16mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/player", playerRoutes);
app.use("/api/venue", venueRoutes);
// app.use("/api/fixture", fixtureRoutes);
app.use("/api/team", teamRoutes);
mongoose
  .connect(
    `mongodb+srv://himanshu20:xtreme20@cluster0.dumxb.mongodb.net/myt?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
