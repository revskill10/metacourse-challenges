const express = require('express');
const validateUser = require('./testjoi.js');
const app = express();
const port =  4000;
app.use(express.json());
app.post('/api/users/register', (req, res) => {
  console.log(req.body)
  const { error } = validateUser(req.body);
  if (error) {
    res.json({ result: "lỗi"})
    return res.status(400).send(error.details[0].message);
  }
  // Nếu hợp lệ, tiếp tục xử lý
  // const user = {
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name,
  //   password: req.body.password,
  //   email: req.body.email
  // };
  // res.send(user);
  res.json({ result: "đăng ký thành công"})
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
