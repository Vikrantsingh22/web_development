const express = require("express");
const app = express();
// yaha par app ke andar express ke module daala hain and yaha par humlog directly app.anycommand ka use karenge

// yaha par jab browser par localhost:3000 kholenge to error aayega kuch open hi nahi hoga qki get request ka koi response 
// hi nahi hai browser ke paas
// app.get "/" ka use karke get method ko / request ka response de sakte hian


// yaha par / route hain matlab isse localhost:3000/ ko acces kar sakte hian
app.get("/", /* yaha par route ko request ND RESPONSE dega */function(req,res){
    res.send("port you are using is 3000")
    // yaha par response naam ka ek object use kar rahe hain jisse humlog send kar sakte hian data
});
app.listen(3000, function random() {
    // yaha par ek random call back function banay hain jisse pata chale ki yeh chal raha hain ya nahi gdhg

    console.log("port started at 3000")
});
// matlab listen to port 3000

// ROUTE NO.1  HOME
app.get("/home",function(req,res){
    res.send("this is home page");
});

//ROUTE NO.2 CONTACT
app.get("/contact",function(req,res){
    res.send("this is contact page");
});

// browser abhi route form ho jayega so har baar / ka use kare route open kar sakte hian

//ROUTE NO. 3 ABOUT
app.get("/about",function(req,res){
    res.send("this is about page");
});

// app.get("/profile",function(req,res){
//     res.send("this is profile page");
// });
