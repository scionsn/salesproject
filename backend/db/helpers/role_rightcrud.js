const rolerightcollection=require("../models/role_right_mapping");
const rolerightoperations={
    add(record){
var promise=rolerightcollection.create(record);
return promise;
    }
}
module.exports =rolerightoperations