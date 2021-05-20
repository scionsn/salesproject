const nodemailer = require('nodemailer');
function sendMail(to, subject, msg){

        const transporter = nodemailer.createTransport({
            service:'gmail',          
            auth:{
                user:"santasn99@gmail.com",
                pass:"",

            }
        });
        const mailOptions = {
            from:'santasn99@gmail.com',
            to:to,
            subject:subject,
            text:msg
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log('Mail Not Send  Due to Some Error ',err);
            }
            else{
                console.log('Mail Has Been Send  ',info.response);
            }
        })
    }
    
    module.exports = sendMail;

