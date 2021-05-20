const connection=require("../../utils/connection")
var schema=connection.Schema;
var leadresponseschema=new schema({
type:{required:true,type:String,minlength:3},
score:{required:true,type:Number},
})

const lead_respcollection=connection.model("lead_response",leadresponseschema)
module.exports=lead_respcollection