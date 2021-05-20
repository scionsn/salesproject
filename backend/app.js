var express=require("express");
var cors=require("cors");
var app=express();
var bodyparser=require("body-parser");
const lroute=require("./routes/RegisterLead");
const sroute = require("./routes/StaffRegister");
const groute = require("./routes/GroupCreateService");
const passport=require("./utils/passport");
const linterroute = require("./routes/LeadInter");
const prodroute = require("./routes/productlist");
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors());
app.use("/lead",lroute)
app.use("/staff",sroute)
app.use("/group",groute)
app.use("/leadinter",linterroute)
app.use("/prod",prodroute)

app.use("/",require("./routes/Auth"))
var port=process.env.PORT||2345;
app.listen(port,()=>{
    console.log("server started on",port);
})
