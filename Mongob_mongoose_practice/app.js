const mongoose= require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser: true})
.then(()=>{
    console.log("connected to mongodb");
})
.catch(err =>{
    console.log(err)
})

const dbschema= new mongoose.Schema({
    name1:String,
    rating:Number,
    review:String
});

const fruits= new mongoose.model("fruits",dbschema);

const adder=async()=>{
    const ff= new fruits({
        name1:'Kiwi',
        rating:9,
        review:"healthy and tangy"
    });
    await ff.save();
}
//adder();

const personSchema= mongoose.Schema({
    name2:String,
    age:Number
});

const person= mongoose.model("people",personSchema);

const adder1=async()=>{
    const personentry= new person({
        name2:"Vikrant",
        age:18
    });
    await personentry.save();
}
// adder1();

const personentry2= new person({
    name2:"John",
    age:37
});
// personentry2.save();

const banana= new fruits({
    name1:'banana',
    rating:8,
    review:'It is what it is'
});
const grapes= new fruits({
    name1:'grapes',
    rating:9,
    review:'sour fruits'
});
const cherry= new fruits({
    name1:'cherry',
rating:6,
review:'a hyped fruit'
});

// fruits.insertMany([banana,grapes,cherry]);

// const callinf=async()=>{
//     await fruits.find().exec();
// }
// callinf();

// const fruitscall= fruits.find({
//     rating:{$eq:8}
// }).exec();
// console.log(fruitscall);


fruits.find().then((fruitscall) => {
    for(i=0;i<(fruitscall.length);i++){
        console.log(fruitscall[i].name1);
    }
    // mongoose.connection.close();
  }).catch((error) => {
    console.error(error);
    
  });
  