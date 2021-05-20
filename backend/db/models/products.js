const connection=require("../../utils/connection")
var schema=connection.Schema;
var productschema=new schema({
name:{required:true,type:String,minlength:3},
description:{required:true,type:String},
status:{required:true,type:String},
price:{required:true,type:Number}

})

const productcollection=connection.model("products",productschema)
module.exports=productcollection