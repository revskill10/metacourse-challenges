const e = require('express');
const express = require('express');
const validateUser = require('./joihoang');
const app = express();
const port =  4000;
app.use(express.json());
app.post('/api/users/register', (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.json({
      result: "Lỗi",
      message: error.details[0].message
    });
    return res.status(400).send(error.details[0].message);
  }
  res.json("đăng ký thành công");
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});