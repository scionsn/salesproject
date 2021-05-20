const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const auth = require('./authconfig');
const staffop=require("../db/helpers/staffcrud")
const google = new GoogleStrategy(auth,(accessToken,refreshToken, profile, done)=>{
    console.log('CallBack of GoogleStrategy ',profile);
staffop.findone({"email":profile.emails[0].value}).then(doc=>{
    console.log("profile  found",doc)
    done(null,profile);

}).catch(err=>{
    console.log("profile not  found",err)
    done(err,null)
})
    // Find the Email Id in the Mongo
    // If it is Found then do call done(null,profile);
    // If it is not found then do Mongo create (Insert) and during insert pass all the fields from the profile
    // Once it is inserted then call done(null,profile);
    // if insertion fails  done(err,null);
    // done();

});
passport.use(google);
module.exports = passport;