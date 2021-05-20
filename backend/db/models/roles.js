const connection=require("../../utils/connection")
var schema=connection.Schema;
var roleschema=new schema({
name:{required:true,type:String,minlength:3},
description:{required:true,type:String},
status:{required:true,type:String},

})

const rolecollection=connection.model("roles",roleschema)
module.exports=rolecollection