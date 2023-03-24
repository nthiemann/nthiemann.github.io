const express = require("express");
const app = express();
const path = require('path');


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.get("/dev", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/dev.html'));
});

app.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/music.html'));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/blog.html'));
});