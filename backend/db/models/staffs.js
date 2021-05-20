const connection=require("../../utils/connection")
var schema=connection.Schema;
var staffschema=new schema({
name:{required:true,type:String,minlength:3},
email:{required:true,type:String},
phone:{required:true,type:Number},
designation:{required:true,type:String},
photo:{required:true,type:String},
userid:{required:true,type:String},
pwd:{required:true,type:String},
})


const staffcollection=connection.model("staffs",staffschema)
module.exports=staffcollection