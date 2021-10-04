const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const api = require("./routes/api");

const app = express();
// const planetsRouter = require("./routes/planets/planets.router");
// const launchesRouter = require("./routes/launches/launches.router.js");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined")); // combined is default
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);
// app.use("/planets", planetsRouter);
// app.use("/launches", launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
