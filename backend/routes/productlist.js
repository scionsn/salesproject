const express=require("express");
const prodroute=express.Router();
const prodcrud=require("../db/helpers/productcrud")
prodroute.get("/prodinfo",(req,res)=>{
    res.set({'content-type':'application/json'});
    prodcrud.find().then(data=>{
        res.status(200).json(data)

    })
})

module.exports=prodroute

