const express = require("express");
const app = express();
const port = 4001;
app.use(express.json());

const Joi = require("joi");
const schema = Joi.object({
  first_name: Joi.string().alphanum().min(3).max(40).required(),
  last_name: Joi.string().alphanum().min(3).max(40).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")),

  password_confirmation: Joi.ref("password"),
})
  .with("first_name", "last_name")
  .with("password", "password_confirmation");

var cmsRouter = express.Router();
cmsRouter.post("/api/user_validation", async (req, res, next) => {
  console.log("Input validation");
  console.log(req.body);
  try {
    const { error, value } = schema.validate(req.body);
    console.log(error.toString());
    res.status(200).json(error.toString());
  } catch (err) {
    next(err);
  }
});

app.use(cmsRouter);

app.use(function (err, req, res, next) {
  console.log("Calling actual error handler:");
  res.status(200).json(err.toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
