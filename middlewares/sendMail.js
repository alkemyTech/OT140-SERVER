require('dotenv').config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


  const sendMail = async(email) => {
    try {
      await sgMail.send(email);
      console.log('Email successfully sent')
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
  
module.exports = sendMail