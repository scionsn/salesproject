const connection=require("../../utils/connection")
var schema=connection.Schema;
var rightschema=new schema({
name:{required:true,type:String,minlength:3},
description:{required:true,type:String},
status:{required:true,type:String,trim:true},
rightid:{required:true,type:"string"},
screen:{required:true,type:String},

})

const rightcollection=connection.model("rights",rightschema)
module.exports=rightcollection