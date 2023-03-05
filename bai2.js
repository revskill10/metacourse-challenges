const express = require('express')
const MathServiceClient = require('./goi2.js')
const app = express()
const port = 3000

app.use(express.json());

app.post('/api/register', async (req, res) => {
  console.log(req.body);
  const mathServiceClient = new MathServiceClient();
  const result = await mathServiceClient.sum({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    password_confirmation: req.body.password_confirmation,
    email: req.body.email
  })
  res.send({result});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })