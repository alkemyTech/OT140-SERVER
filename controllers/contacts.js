const { Contact } = require('../models/index');
const sendMail = require('../middlewares/sendMail')
require('dotenv').config()


const getContacts = async (req, res) => {

    try {
        const list_contact = await Contact.findAll();
        res.status(200).json(list_contact)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

const contactFindAll = async (req, res) =>{
    try {
        const contact = await Contact.findAll({
            attributes: ['id', 'name', 'phone', 'email', 'message']
        });
        return res.json(contact);

    } catch (error) {
        res.status(500).send('Internal server error: '+error)
    }
};

const createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const contact = await Contact.create({
            name,
            email,
            phone,
            message
        })
        
        sendMail({
            to: email,
            from: {
                email: process.env.SENDGRID_MAIL,
                name: 'ALKEMY'
            },
            subject: 'ALKEMY - Message Received',
            text: `Hello ${name}!!. We will be in touch as soon as possible. Thank you for your message.`
        })
        res.status(200).send({
            msg: 'contact successfully delivered.',
            contact
        })

    }catch(err){
        console.log(err)
        res.status(500).send('Internal server error')
    }
}


module.exports = {
    getContacts,
    contactFindAll,
    createContact
};