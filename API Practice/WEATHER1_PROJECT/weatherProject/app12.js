
// WB DEVELOPMENT LECTURE243,


const express = require("express");
const app = express();
const https = require("https");
// yaha par ek weather ka website banana hain toh isiliye humlog APi KA USE  karenge but APi install 
// I mean kaise use karenge toh uske ke different method hain but humlog https module ka use karenge



// hamesha yaad  rakhna hain app method main sirf ek hi send ho sakta hain aur usse zyada raha toh error ayega
// par apne paas multiple res.write ho sakte hain
app.get("/", function(req,res){


    // hamesha yaad rakhna hain ki kabhi bhi humlog https module use karte wakt https ke alawa aur koi url use nahi kar sakte
 const url ="https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=899f83b5eb41f76c9be32cccdc5ceabb&units=metric";
 


 // ab use ekarenge https ka aur humlog url ka use karke acces karenge API ko
 
 
 // ab yaha par humlog use karenge url ko aur request make karenge and ek response milega
 https.get(url,function(response){
 
     // yeh niche ka console apne ko batayega ki konsa apneko konsa status code mil raha hain request karne par
     //console.log(response.statusCode);
 
     console.log(response.statusCode);
 
     // Abhi apneko use karna hain respomse.on ka yeh apne ko batayega ki apneko kya mil raha pure 
     // request main but in hexadecimal form
 
     response.on("data",function(data){
 
         // apneko data yaha par hexadecimal main mila hai apneko woh normal form matlab ki object form main convert karna hai
         //humlog JSON.parse ka use karte hain joh convert kardega hexadecimal value ko JSoN nested object main
 
         const weatheData = JSON.parse(data)
         console.log(weatheData);
 
         // yaha par humlog specific data le rahe hain joh hain humlog ka temperature iska ocation ke json awesome 
         // viewer ka use hoga
         const weathertemp = weatheData.main.temp
         console.log(weathertemp);
         // apne paas data hain  but apneko koi partcular data chahiye isilye humlog .mai.temp ka use karenge 
         //yeh .main.temp ka pata karne ke liye humlog use karenge json viewer awesome ka 
 
         // abhi weather ka description print karenge 
         const weatherdescription= weatheData.weather[0].description;
         console.log(weatheData.weather[0].description)
         // yaha par weather ka description console main print hoga
         
 
 
         const weathericon = weatheData.weather[0].icon;
         const imageurl= " https://openweathermap.org/img/wn/" + weathericon + "@2x.png";
         // yaha par concatenation ka use hoga qki apneko icon ka url chahiye apneko 
         res.write("<p>the weather temperature is "+ weathertemp+"degrees </p>");
         res.write("<h1>The weather description is "+weatherdescription +"is </h1>");
         res.write("<img src="+imageurl+">");
         res.send();
         
 
 
 
 
         // JSON se humlog long js file ko ek string main bhi convert kar sakte hain and woh use karne ke baad 
         // humlog milega ek normal  one line ka string
 
         
         // const object ={
         //     name2: "Vikrant",
         //     myfavoritefood: "Chicken",
         // }
         // console.log(JSON.stringify(object));
     })
 
 })
     app.listen(3000,function(){
     console.log("Server is running on port 3000");
 
 })
    
});

