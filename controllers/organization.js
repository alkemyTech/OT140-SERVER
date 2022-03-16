const { Organization } = require('../models/index');
const { Slide } = require('../models/index');

const getOrganization = async (req, res) => {

    try {
        const orga = await Organization.findAll({
            include: {
                model : Slide,
                order: [
                    ['order', 'ASC']
                ],
                attributes: ['text', 'imageUrl', 'order']
            }
        });
        res.json(orga)
    } catch (error) {
        res.json({ msg: 'there are no organizations to display' });
    }
};

module.exports = {
    getOrganization,
    getSlide
};  