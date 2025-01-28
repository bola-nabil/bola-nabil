const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

let totalVisits = 0;

app.get("/api/visits", (req, res) => {
  res.json({ totalVisits });
});

app.post("/api/visits/increment", (req, res) => {
  totalVisits += 1;
  console.log("Total Visits incremented:", totalVisits);
  res.json({ totalVisits });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
