const express = require("express");
const app =express();
const https= require("https");

app.get("/",function(req,res){

    https.get
    res.send("Server is up and running at 3000");
})

app.listen(3000,function(){
    console.log("started at 3000");
})