const staffcollection=require("../models/staffs");
const staffoperations={
    add(record){
var promise=staffcollection.create(record);
return promise;
    },
    find(){
        var pr=staffcollection.find();
        return pr;
    },
    findone(record){
        var pr=staffcollection.findOne(record);
        return pr;
    }
}
module.exports =staffoperations