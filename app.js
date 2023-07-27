const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("ABHISHEK YADAV DEVEOPER");
});

app.listen(4002, () => {
  console.log(`Server Started at ${4002}`);
});
