require('dotenv').config()
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendContactEmail = async(msg) => {
    try{
        await sgMail.send(msg)
        console.log('Message sent succesfully')
    }catch(err){
        console.log(err)
    }
}



module.exports = sendContactEmail