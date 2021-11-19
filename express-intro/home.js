const express = require('express');

const app = express();

const users_data = require("./sampledata.json");


const port=5000;

app.get('/',(req,res)=>{
    res.send("Welcome!");
})

app.get('/users',(req,res)=>{
    res.send(users_data);
})

app.listen(port,()=>{
    console.log("listening on ",port);
})
