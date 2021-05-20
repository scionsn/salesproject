const staffrolecollection=require("../models/staff_role_mapping");
const staffroleoperations={
    add(record){
var promise=staffrolecollection.create(record);
return promise;
    }
}
module.exports =staffroleoperations