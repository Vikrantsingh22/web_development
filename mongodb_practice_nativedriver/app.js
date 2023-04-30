const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true})

.then(()=>{console.log("connected to mongodb")})
.catch(err =>{
  console.log(err)
})

const students=  new mongoose.Schema({
  name1:String,
  workout:Boolean,
  height:Number
});
const Students= new mongoose.model("Students",students);

const adder= async ()=>{
  const ss = new Students({
    name1:'Vikrant',
    workout:true,
    height:5
  });
  
  await ss.save();
}

adder();