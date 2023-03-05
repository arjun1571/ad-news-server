const express = require("express")
const app = express()
const port = 5000
const cors = require ('cors')
const catagories = require("./data/categories.json")

app.use(cors())
app.get('/',(req,res) =>{
    res.send("hello word")
})
app.get('/catagories',(req,res) =>{
    res.send(catagories)
})

app.listen(port , ()=>{
    console.log(`lisining start port on  ${port}`);
})