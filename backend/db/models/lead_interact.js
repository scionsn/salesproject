const connection=require("../../utils/connection")
var schema=connection.Schema;
var leadinteractschema=new schema({
day:{required:true,type:String,minlength:3},
remarks:{required:true,type:String},
responsetype:{required:true,type:Object,minlength:4,trim:true},
customerid:{required:true,type:Object},
staffid:{required:true,type:schema.Types.ObjectId},

})

const lead_intercollection=connection.model("lead_interact",leadinteractschema)
module.exports=lead_intercollection