const express=require("express");
const linterroute=express.Router();
const lintercrud=require("../db/helpers/lead_interactcrud")
linterroute.get("/leadinterinfo",(req,res)=>{
    res.set({'content-type':'application/json'});
    lintercrud.find().then(data=>{
        console.log("lead data is:",data[0])
        res.status(200).json(data)

    })
})

module.exports=linterroute

