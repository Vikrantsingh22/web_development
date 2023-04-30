const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static(__dirname +"/public"));
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){

    // what is our response our respnse wil be to send the dirname and the html file
        res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    var firstname= req.body.fname;
    var lastname= req.body.lname;
    var email= req.body.email;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
})
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});