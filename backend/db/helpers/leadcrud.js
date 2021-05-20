const leadcollection=require("../models/leads");
const leadoperations={
    add(record){
var promise=leadcollection.create(record);
return promise;
    },
    find(){
        var pr=leadcollection.find();
        return pr;
    }
}
module.exports =leadoperations