const express=require("express")
const sroute=express.Router()
const staffcrud=require("../db/helpers/staffcrud")
sroute.get("/showstaff",(req,res)=>{
    res.set({'content-type':'application/json'});
    staffcrud.find().then(data=>{
        console.log("lead data is:",data[0])
        res.status(200).json(data)
    })
})
sroute.get("/showstaff",(req,res)=>{
    res.set({'content-type':'application/json'});
    staffcrud.find().then(data=>{
        console.log("lead data is:",data[0])
        res.status(200).json(data)
    })
})

sroute.post("/addstaff",(req,res)=>{
    res.set({'content-type':'application/json'});
var phone=Number(req.body.phone)
const obj={
    name:req.body.name,
    email:req.body.email,
    phone:phone,
    designation:req.body.designation,
    photo:req.body.photo,
    userid:req.body.userid,
    pwd:req.body.pwd 
}

staffcrud.add(obj).then(doc=>{
    console.log("staff added succesfully",doc)
    res.json(doc)
}).catch(err=>{
    res.json(err)

    console.log("staff add err",err)
})
    })
    module.exports=sroute



    