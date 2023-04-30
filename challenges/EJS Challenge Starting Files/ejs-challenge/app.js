//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { sortedUniq, get } = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const _=require("lodash");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
// humlog ne body parser ka use qki paneko imput ko access karna tha 
app.use(express.static("public"));

var postcontent=[];


app.get("/",function(req,res){
  
  res.render("home",{startingtext: homeStartingContent ,
  posts:postcontent
  });

  // challenge 1 tha ki sirf home yeh print karna hain home route par ya phir home page par using home.ejs se 
  // toh render kiya humlog ne home.ejs ko 
  //res.render("home");

  // challenge 2 tha ki humlog ko homestarting content ko print karna hian starting ke homepage par
  // res.render ka use kiya humlog ne homestartingcontent ko humlog ne assign kiya startingtext ko aur aur usee humlog ne 
  // home par print kiya
})

app.post("/",function(req,res){

});

app.get("/about",function(req,res){
  res.render("about",{aboutpagetext:aboutContent});
});

// yeh challenge 5 hain jisme humlog about ejs page ko render kar rahe /about route par aur yaha par 
// yaha par humlog aboutpagetext mai   about content daal rahe hain aur yaha par yeh key value pair hain
app.get("/contact",function(req,res){
  res.render("contact",{contactpagetext:contactContent});
});

app.get("/compose",function(req,res){
  res.render("compose");
});
// yaha par humlog challenge 7 main bola tha ki humlog ko compose web page ko access karna tha 
// isiliye humlog ne use kiya app.get method ko use kiya 
app.post("/compose",function(req,res){
  let item=req.body.newtext;
  let textitem= req.body.postbody;
  var post={
    posttitle: req.body.newtext,
    bodypost: req.body.postbody
  };

  postcontent.push(post);
  
  res.redirect("/");
// jaise hi user ne message enter kiya home page 

  // yeh challenge 11 tha apneko user se compose page par input lena tha aur don text input ko javascript object main
  // save karke console main print karna tha
  // challenge main yeh mention tha ki ek baar enter karne ke baad humlog home page par redirect karna tha


  // console.log(postcontent);

  
  // console.log(item);
  // yaha par humlog ne newtext joh input ka name hain usse user input liya aur usse 

  // yeh challenge 8 tha isme apne ko joh bhi text input mila hain usse humlog ko consle mainprint karna hain
});

// challenge no. 16 ye tha ki apneko rouing parameters ka use karna hai jiske help se apne ko 
// dynamic pages ko access karna hain

app.get("/posts/:randomname",function(req,res){
  // console.log(req.params.randomname);

  // yeh tahn challenegs 17 tha isme umlog ko check karna tha ki joh parameters hain waoh posts page main se kisi post ka title hain kya
  // iske ke liye humlog ne saare post ke titl ka naam ek array ke andar ek key value pair main store kiya tah 
  // humlog ek variable ke andar parameters ka name store kiya 
  //humlog ne loop run kiya for accessing every element of array and use kiya if ka jiske help se comparison se humlog ne result ko consle main 
  // print kiya 
  var parametername= _.lowerCase(req.params.randomname);
 for(var i=0;i<postcontent.length;i++){
  if(_.lowerCase(postcontent[i].posttitle)===parametername){
    res.render("post",{
      title:postcontent[i].posttitle,
      component:postcontent[i].bodypost
    });

//     yeh tha humlog ka challenge no. 19 isme parameter ke name ke according posts ke page par apneko
// print karna tha ek normal sa title of post and post body
    // console.log('Matchfound');
  }else{
    // console.log("match not found");
  }
 }
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
