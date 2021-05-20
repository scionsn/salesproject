const  staffop=require("../db/helpers/staffcrud")
const  roleop=require("../db/helpers/rolecrud")
const  productop=require("../db/helpers/productcrud")
const  lead_resop=require("../db/helpers/lead_responsecrud")
const  groupop=require("../db/helpers/groupcrud")
const  lead_interop=require("../db/helpers/lead_interactcrud")
const  leadop=require("../db/helpers/leadcrud")
const  rightop=require("../db/helpers/rightcrud")
const  role_rightop=require("../db/helpers/role_rightcrud")
const  staff_roleop=require("../db/helpers/staff_rolecrud")
const obj = require("../utils/token")


async function insert(){
    
    try{
        
        staffop.findone({"name":"raju"}).then(doc=>{
            console.log("the doc is "+doc)
        })
        var rec=staffop.add({
            name:"michael",
                email:"something",
                phone:3156,
                designation:"sales staff",
                photo:"some url",
                userid:"nn",
                pwd:"dndndn"


        })

    var rec1=await groupop.add({
        name:"dwight",
        description:"anything",
        staffid:(await rec)._id
    }) 
    var rec3=await leadop.add({
name:" creed",
email:" ssd ",
phone:55555,
interestin:{
    phone1: "vivo"
},
dob:"2020",
source:"mall",
location:"saket",
staffid:(await rec)._id,
groupid:rec1._id

    })

    var rec2=await lead_interop.add({
day:"monday",
remarks:"good prod",
responsetype:{
    positive:1,
    negative:0
},
customerid:{
id:rec3._id
},
staffid:(await rec)._id

    })
//     var rec4=await rightop.add({
//         name:"banta",
//         description:"something something",
//         status:"done",
//         rightid:"dont know",
//         screen:"something something"
//     })
//     var rec6=await roleop.add({
//         name:"chuski",
//         description:"thandi",
//         status:"ok"
//     })
//     var rec5=await role_rightop.add({
// roleid:rec6._id,
// rightid:rec4._id
//     })
// var rec=await staffop.add({
//     name:"tim",
//     email:"something",
//     phone:32156,
//     designation:"sales staff",
//     photo:"some url",
//     userid:"nn",
//     pwd:"dndndn"
// })

// var rec1=await roleop.add({
//     name:"sim",
//     description:"something",
//     status:"something"

// })
// var rec2=await staff_roleop.add({
//     staffid:rec._id,
//     roleid: rec1._id
// })
// var rec2=await productop.add({
//     name:"santa",
//     description:"something",
//     status:"something",
// price:1234

// })
// var rec3=await lead_resop.add({
//     type:"something",
//     score:5

// })


//  var rec2=coronaop.find()
// var rec2=await userop.add({user:"kaashi "})
// var rec3=await exerciseop.add({user:"bihari",description:"football",date:"2nd august",duration:11})
// var rec4=await exerciseop.update({user:"tim",description:"simple exer",date:"3rd august",duration:14})
// var rec5=await exerciseop.findbyid({_id:"5ec1fa703683b1278c6bb08b"})
// var rec5=await userop.delete({_id:"5ebb8b619090ca1c244b28d4"})

console.log("records added in db ",rec,rec1,rec3);
  
}
    catch(e){
        console.log("error in insert--",e)
    }
}
insert();

