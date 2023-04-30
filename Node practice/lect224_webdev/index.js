// yaha par npm install ka use karke superheroes ka npm package install kar liya 
var superheroes = require("superheroes");
// koi bhi package  use karne ke liye apne ko usse require karna padta hain
var mysuperheroes= superheroes.random();
console.log(mysuperheroes);
// yeh random koi bhi superheroes ka naam print karega screen par
var supervillains= require("supervillains");
var mysupervill= supervillains.random();
console.log(mysupervill);
