const express=require("express");
const lroute=express.Router();
var mongoose = require('mongoose');
var sendmail=require("../utils/mail")

const lcrud=require("../db/helpers/leadcrud")
lroute.get("/leadinfo",(req,res)=>{
    res.set({'content-type':'application/json'});
    lcrud.find().then(data=>{
        console.log("lead data is:",data[0])
        console.log(typeof data[0].interestin)
        res.status(200).json(data)

    })
})
    lroute.post("/addleads",(req,res)=>{
        res.set({'content-type':'application/json'});
    const interestin=JSON.parse(req.body.interestin)
    const staffid=mongoose.mongo.ObjectId(req.body.staffid)
    const groupid=JSON.parse(req.body.groupid)
    const phone=Number(req.body.phone)
    const newobj={
        name:req.body.name,
        email:req.body.email,
        phone:phone,
        interestin:interestin,
        dob:req.body.dob,
        source:req.body.source,
        location:req.body.location,
        staffid:staffid,
        groupid:groupid
    }
    console.log("lead obj received",newobj)
    lcrud.add(newobj).then(doc=>{
        console.log("lead added succesfully",doc)
        sendmail(req.body.email,"initial mail","thanks for joining")
        res.json(doc)
    }).catch(err=>{
        res.json(err)

        console.log("lead add err",err)
    })
        })




module.exports= lroute