const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

const port = 3000

const eventRoute = require("./routes/event")
const userRoute  = require("./routes/auth")

app.on("err",()=>{
    console.log("error")
})
app.once("open",(req,res)=>{
    res.json()
})
app.get("/",(req,res) =>{
    res.send({message:"hello world!"})
})
app.listen(port,()=>{
    console.log('server is running on port ' +port)
})




