const express = require("express");
const { save_user_data, get_user_data } = require("./db");
const CmsValidationClient = require("./cms_client");
const app = express();
const port = 4000;
app.use(express.json());
const cmsClient = new CmsValidationClient();

var userRouter = express.Router();

userRouter.post("/api/users/register", async (req, res, next) => {
  console.log("Doing registration");
  console.log(req.body);

  const error = await cmsClient.validate(req.body);
  console.log("NGOC1: " + error);
  if (error) {
    console.log("Input Validation Error");
    next(new Error(error.toString()));
  } else {
    try {
      let result = save_user_data(req.body, (result) => {
        if (result === 0)
          res.json(
            "Successfully registration! User information: " +
              JSON.stringify(req.body)
          );
        else if (result === 1)
          res.json("User existed: " + JSON.stringify(req.body));
        else res.json("Error when writing to database");
      });
    } catch (err) {
      res.json("Server issue during saving user data");
    }
  }
});
app.use(userRouter);

app.use(function (err, req, res, next) {
  console.log("Calling actual error handler:");
  res.status(200).json(err.toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
