const { Contact } = require('../models/index');


const getContacts = async (req, res) => {

    try {
        const list_contact = await Contact.findAll();
        res.status(200).json(list_contact)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}



module.exports = {
    getContacts
};