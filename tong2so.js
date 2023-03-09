const express = require('express')
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
const port = 4000
const {sum} = require('./main');
app.use(express.json())
app.post('/api/sum',(req,res)=>{
    const x=req.body.x
    const y=req.body.y
    const z= sum(x,y)
    res.send({result:z})
})
//app.get('/', (req, res) => {
//res.send('Hello World!')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})