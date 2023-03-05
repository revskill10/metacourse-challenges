const express = require('express')
const app = express()
const port = 3000
const MathServiceClient=require('./goi.js')

app.get('/', async (req, res)  => {
    
    const mathServiceClient = new MathServiceClient()
const result = await mathServiceClient.sum({ x: 10, y: 30 })
res.send({result})
})

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
