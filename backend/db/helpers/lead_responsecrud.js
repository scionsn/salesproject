const lead_rescollection=require("../models/lead_response");
const lead_resoperations={
    add(record){
var promise=lead_rescollection.create(record);
return promise;
    }
}
module.exports =lead_resoperations