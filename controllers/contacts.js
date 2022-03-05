const { Contact } = require('../models/index');


const getContacts = async (req, res) => {

    try {
        const con = await Contact.findAll();
        res.json(con)
    } catch (error) {
        res.json({ msg: 'No contact list to display' });
    }
}



module.exports = {
    getContacts
};