//curl -X POST -H "content-type:application/json" --data '{"x":"10","y":"30"}' http://localhost:3000/api/sum
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const Joi = require("joi");
const schema = Joi.object({
  first_name: Joi.string().alphanum().min(3).max(40).required(),
  last_name: Joi.string().alphanum().min(3).max(40).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")),

  password_confirmation: Joi.ref("password"),
})
  .with("first_name", "last_name")
  .with("password", "password_confirmation");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users/register", (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    //   res.status(400);
    //   res.json("123");
    res.status(400).send(error.toString());
  } else res.json("Registration completed!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
