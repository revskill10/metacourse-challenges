const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 5000
const mathServiceClient = require('./mainservice.js')
app.get('/', async(req, res) => {
    const mathServiceClient = new MathServiceClient()
    const result = await mathServiceClient.sum({ x: 10, y: 30 })
    res.send({result})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})