const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));

let totalVisits = 0;

app.get("/api/visits", (req, res) => {
  res.json({ totalVisits });
});

app.post("/api/visits/increment", (req, res) => {
  totalVisits += 1;
  res.json({ totalVisits });
});

module.exports = app;
