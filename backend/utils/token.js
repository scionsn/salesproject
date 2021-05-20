const jwt = require('jsonwebtoken');
const obj = {
    secret:'thisisthesecretkey',
    createToken(emailId){
        let tokenId = jwt.sign({userid:emailId},this.secret,{expiresIn:'1h'});
        console.log('Token is ',tokenId);
        return tokenId;
    },
    verifyToken(tokenId){
        let decode = jwt.verify(tokenId, this.secret);
        console.log("decoded",decode)
        if(decode && decode.userid){
                return true;
        }
        return false;
    }
}
module.exports = obj;
// let tokenId = obj.createToken('amit@gmail.com');
// let result = obj.verifyToken(tokenId)?"Correct":"InCorrect";
// console.log('Result is ',result);