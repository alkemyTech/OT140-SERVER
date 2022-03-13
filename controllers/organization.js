const { Organization } = require('../models/index');

const getOrganization = async (req, res) => {

    try {
        const orga = await Organization.findAll({
            attributes: ['name', 'image','phone','address','socialNetwork']
          });
        res.json(orga)
    } catch (error) {
        res.json({ msg: 'there are no organizations to display' });
    }
};

module.exports = {
    getOrganization
}; 