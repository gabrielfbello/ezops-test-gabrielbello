// Create a server that listens on port 3000.

const express = require("express");
const app = express();
const port = 3000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

app.get("/", (req, res) => {
  res.send("Running!!!!!! 🔥 🔥 🔥");
});

app.get("/random", (req, res) => {
  res.send(getRandomInt(1, 1000).toString());
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
