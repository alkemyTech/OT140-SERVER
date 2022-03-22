const { Organization } = require('../models');
const { social_media } = require('../models');

const getOrganization = async (req, res) => {

    try {
        const orga = await Organization.findAll({
            includes :{
                models: social_media
            }
          });
        res.json(orga)
    } catch (error) {
        res.json({ msg: 'there are no organizations to display' });
    }
};

const updateOrganization = async ( req, res ) => {

    const { id, _id, ...rest } = req.body;
    
    // TODO add logic to upload organization's image
    const organization = await Organization.findByPk(req.params.id);
    if(!organization){
        res.status(404).json({ message: 'Organization not found id db'});
    }
    await Organization.update({ ...rest }, { where: { id: req.params.id } });
    res.status(200).json({ msg: 'Organization updated' });
}


module.exports = {
    updateOrganization,
    getOrganization
};