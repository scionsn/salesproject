const productcollection=require("../models/products");
const productoperations={
    add(record){
var promise=productcollection.create(record);
return promise;
    },
    find(){
        var pr=productcollection.find();
        return pr;
    }
}
module.exports =productoperations