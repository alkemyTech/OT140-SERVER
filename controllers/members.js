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

const create = async(req, res) => {
    try {
        const { name } = req.body;

        if (typeof name === "string") {
            const newMember = await Members.create({ name: name });
            res.status(200).json({
                sucess: true,
                msg: `Member ${name} was created.`,
                newMember
            });
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: `The member name isn't a string.`
        });
    };
};
module.exports = {
    getAll,
    create
}