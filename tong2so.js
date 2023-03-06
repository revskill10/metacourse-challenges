const express = require('express')
const app = express()
const port = 4000
const{sum}=require('./math.js')
app.use(express.json())
app.post('/api/sum', (req, res) => {
    
  const x= req.body.x
  const y= req.body.y
  const z=sum(x,y)
  res.send({result:z})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
