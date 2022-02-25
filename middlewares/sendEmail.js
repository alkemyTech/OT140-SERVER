// ====================================
// SEND WELCOME EMAIL TO NEW USERS 
// ====================================

const sendgrid = require('@sendgrid/mail');
require('dotenv').config();

//Config SendGrid
const apiKey = process.env.SENDGRID_API_KEY;
const ongEmail = process.env.SENDGRID_EMAIL;
const template = process.env.SENDGRID_TEMPLATE;
const email = process.env.TEST_EMAIL;

sendgrid.setApiKey(apiKey);

//Send email
//const email = req.body.email;

const message = {
    to: email,
    from: ongEmail,
    templateId: template,
};
const sendWelcomeEmail = () => {
    sendgrid.send(message)
        .then((response) => console.log('Welcome email sent...'))
        .catch((error) => console.log(error.message));
};

module.exports = {
    sendWelcomeEmail
}