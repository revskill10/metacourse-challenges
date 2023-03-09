const express = require('express');
const validateUser = require('./test.js');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/api/users/register', (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation,
        email: req.body.email
    }
    res.send("Tao tai khoan thanh cong");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});