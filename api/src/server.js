const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "https://bola-nabil.github.io/bola-nabil/" }));

let totalVisits = 0;

app.get("/api/visits", (req, res) => {
  res.json({ totalVisits });
});

app.post("/api/visits/increment", (req, res) => {
  totalVisits += 1;
  res.json({ totalVisits });
});
