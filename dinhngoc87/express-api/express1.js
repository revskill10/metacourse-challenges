//curl -X POST -H "content-type:application/json" --data '{"x":"10","y":"30"}' http://localhost:3000/api/sum
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/sum", (req, res) => {
  const { x, y } = req.body;
  res.json({ a: Number(x) + Number(y) });
});

app.post("/api/math", (req, res) => {
  const {
    op,
    params: [x, y],
  } = req.body;
  if (op === "sum") {
    res.json({ a: Number(x) + Number(y) });
  } else {
    console.log("Not sum operator");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
