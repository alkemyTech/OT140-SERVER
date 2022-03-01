const { Members } = require('../models/index');

const getAll = async(req, res) => {
    try {
        const members = await Members.findAll({
            //attributes: ['firstName']     //List of attributes to response json
        });
        res.status(200).json({
            success: true,
            members
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: "Can't get all members."
        })
    };
};

module.exports = {
    getAll
}