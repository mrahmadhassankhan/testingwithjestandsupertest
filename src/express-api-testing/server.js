const express = require("express");
const app = express();
app.use(express.json());
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username == "admin" && password == "12345")
    res.status(200).send({ message: "Authorized" });
  else {
    res.status(401).send({ message: "UnAuthorized" });
  }
});
module.exports = app;
