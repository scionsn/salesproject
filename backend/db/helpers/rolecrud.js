const rolecollection=require("../models/roles");
const roleoperations={
    add(record){
var promise=rolecollection.create(record);
return promise;
    }
}
module.exports =roleoperations