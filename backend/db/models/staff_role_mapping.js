const connection=require("../../utils/connection")
var schema=connection.Schema;
var staffroleschema=new schema({
staffid:{required:true,type:schema.Types.ObjectId},
roleid:{required:true,type:schema.Types.ObjectId},

})

const staff_rolecollection=connection.model("staff_role",staffroleschema)
module.exports=staff_rolecollection