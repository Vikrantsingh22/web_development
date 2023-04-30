const express =require('express');
const app= express();
const https = require("https");

app.listen(3000,function(){
    console.log("Server is running on port 3000");

});

app.get("/",function(req,res){

    const url= 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=899f83b5eb41f76c9be32cccdc5ceabb&units=metric';

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatheData = JSON.parse(data)
            const temp = weatheData.main.temp
            const icon =weatheData.weather[0].icon
            const weatherdescription= weatheData.weather[0].description
            const imageurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            // res.write("<p>The waether is currently"+ weatherdescription+"<p>");
            // res.write("<h1> the temperature in london is "+temp+ "degrees celcius.</h1>")
            // res.write("<img src="+imageurl+">");
            // res.send();
            res.send("<h1> temperature in mumbai is "+ temp+ "degrees <h1>");
        });
    });
});

