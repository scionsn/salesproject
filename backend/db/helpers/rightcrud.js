const rightcollection=require("../models/rights");
const rightoperations={
    add(record){
var promise=rightcollection.create(record);
return promise;
    }
}
module.exports =rightoperations