const { Contact } = require('../models/index');


const getContacts = async (req, res) => {

    try {
        const list_contact = await Contact.findAll();
        res.json(list_contact)
    } catch (error) {
        res.json(error);
    }
}



module.exports = {
    getContacts
};