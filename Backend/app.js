const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const playerRoutes = require("./routes/playerroutes");
const venueRoutes = require("./routes/venueroutes");
app.use(bodyParser.json({ limit: "16mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/player", playerRoutes);
app.use("/api/venue", venueRoutes);
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
