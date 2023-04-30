const express =require ("express");
const bodyparser= require("body-parser");
// with the help of body parser we were able to parse the http request
// by using urlencode we get access to body form data
const app= express();
// yaha par body body parser use karne ke liye usse require kiya hain  
// yaha par app.use ka implementation hua hain 
// app.use(What to use . which type of form)
app.use(bodyparser.urlencoded({extended:true}));
// url encoded matlab ki html se data access kar paayenge 
// extended matlab nested object use ho payega
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");

});


app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");

});

// yaha par joh /bmicalculator likha hain woh exactly same hona chahiye form action ke jaise 
app.post("/bmicalculator",function(req,res){
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);
   var bmi=weight/(height*height);
    res.send("bmi of the given data is "+ bmi);


});
app.post("/",function(req,res){
    // apne ko yaad rakhne ka hain humlog job n=bhi value le rahe hain form se usse computer string ki tarah treat karega
    // isiliye humlog usse convert karenge number
    // AGAR Number add nahi karenge toh apne ko value of 5+3 53 milega
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result= num1+num2;
    res.send("the result of the two number is "+ result);

});

app.listen(3000,function(){
    console.log("port started at 3000");
});