const sendContactEmail = require('../middlewares/sendEmail')
const { Contact} = require("../models/index")
require('dotenv').config()

const createContact = async (req, res) => {
    try {
        const {name, email} = req.body;
        const newContact = await Contact.create({
            name,
            email
        })
        sendContactEmail({
            to: email,
            from: {
                name: 'Alkemy ONG',
                email: process.env.EMAIL_ONG
            },
            subject: "New Contact",
            html: `<h1> Alkemy </h1> 
                        <p> Thank you for contacting us. We'll respond you as soon as we can. </p>
            `        })
        res.status(200).send(newContact)
    }catch(err){

        console.log(err)
    }
}

module.exports = {createContact}