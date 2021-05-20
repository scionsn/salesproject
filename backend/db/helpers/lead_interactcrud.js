const lead_intcollection=require("../models/lead_interact");
const lead_intoperations={
    add(record){
var promise=lead_intcollection.create(record);
return promise;
    },
    find(){
        var pr=lead_intcollection.find();
        return pr;
    }
}
module.exports =lead_intoperations