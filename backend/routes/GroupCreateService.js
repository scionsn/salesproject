var express=require("express")
var groute=express.Router()
var grpcrud=require("../db/helpers/groupcrud")
var mongoose = require('mongoose');

groute.get("/groupinfo",(req,res)=>{
    res.set({"content-type":"application/json"})
grpcrud.find().then(data=>{
    console.log("grp data is:",data)
    res.status(200).send(data)
}).catch(err=>{
    console.log("err in find",err)
})
})
groute.post("/addgroup",(req,res)=>{
    res.set({'content-type':'application/json'});
    const staffid=mongoose.mongo.ObjectId(req.body.staffid)

const obj={
    name:req.body.name,
    description:req.body.description,
    staffid:staffid
  
}
grpcrud.add(obj).then(data=>{
    console.log("grp added",data)
res.send(data);
}).catch(err=>{
console.log("err in grp add",err)
})
})

module.exports=groute