const connection=require("../../utils/connection")
var schema=connection.Schema;
var leadschema=new schema({
name:{required:true,type:String,minlength:3},
email:{required:true,type:String},
phone:{required:true,type:Number,minlength:4},
interestin:{required:true,type:Object},
dob:{required:true,type:String},
source:{required:true,type:String},
location:{required:true,type:String},
staffid:{required:true,type:schema.Types.ObjectId},
groupid:{required:true,type:Object},

})

const leadcollection=connection.model("leads",leadschema)
module.exports=leadcollection