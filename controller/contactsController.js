const db = require("../models/index");

const contactFindAll = async (req, res) =>{
    try {
        const contact = await db.Contact.findAll({
            attributes: ['id', 'name', 'phone', 'email', 'message']
        });
        return res.json(contact);
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {contactFindAll};



