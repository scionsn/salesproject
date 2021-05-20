const connection=require("../../utils/connection")
var schema=connection.Schema;
var rolerightschema=new schema({
roleid:{required:true,type:schema.Types.ObjectId},
rightid:{required:true,type:schema.Types.ObjectId},
})

const role_rightcollection=connection.model("role_right",rolerightschema)
module.exports=role_rightcollection