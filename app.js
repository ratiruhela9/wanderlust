const express=require("express");
const app=express();
const mongoose=require("mongoose");

const Listing=require("./models/listings.js");



async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust')
}

main().
 then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

app.get("/",(req,res)=>{
    res.send("hi i am root");
});

app.get("/testListing", async (req,res)=>{
    let sampleListing=new Listing({
        title:"my new vila",
        description:"by the beach",
        price:1200,
        location:"Calangute, Goa",
        country:"India"
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("sucessfull testing");

});


app.listen(3000,()=>{
    console.log("server is listening");
});
