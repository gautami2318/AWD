const express = require ('express')
const app = express
const port = 3001

app.get('/hello',(req,res) => {
    app.send("hello")
})

app.get('/time',(req,res) => {
    app.send("time")
})

app.get('/date',(req,res) => {
    app.send("date")
})

app.listen(port,() =>{
    console.log('Example app listening a http://localhost:${port}')
})