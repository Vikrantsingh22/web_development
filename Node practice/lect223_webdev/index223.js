//jshint esversion:6
const fs = require("fs");
// yaha par humlog fs ka use karne waale hain isiliye usse pehle import kar rahe hain 
fs.copyFileSync("fil1.txt","fil2.txt");
// yeh filesystem ya fir fs native library hain isse use karne ke liye install karne ki zaroorat nhi hain
// yaha par fs module ka use kar rahe hain and yaha par copyfilesync ka use hoga fil1txt source hain and 
// Fil2 txt destination hain agar fil2 txt present nahi hoga toh woh fil2 txt create ho jaayega if present hain 
// fil1 ka content fil2 main daaldega 