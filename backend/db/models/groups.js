const connection=require("../../utils/connection")
var schema=connection.Schema;
var groupschema=new schema({
name:{required:true,type:String,minlength:3},
description:{required:true,type:String},
staffid:{required:true,type:schema.Types.ObjectId}
})

const groupcollection=connection.model("groups",groupschema)
module.exports=groupcollection