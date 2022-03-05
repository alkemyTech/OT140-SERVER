const { Contacts } = require('../models/index');


const getContacts = async(req, res) => {
    const con = await Contacts.findAll();
    res.json(con)
}



module.exports = {
    getContacts
};