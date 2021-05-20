const groupcollection=require("../models/groups");
const groupoperations={
    add(record){
var promise=groupcollection.create(record);
return promise;
    },
    find(){
        var pr=groupcollection.find();
        return pr;
    }
}
module.exports =groupoperations