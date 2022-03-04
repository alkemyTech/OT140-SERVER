const { Member } = require('../models/index');

const getAll = async(req, res) => {
    try {
        const members = await Member.findAll({
            attributes: ['name'] //List of attributes to response json
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
        const { name, description } = req.body;
        if (typeof name === 'string') {
            const newMember = await Member.create({
                name,
                description
            });
            res.status(200).json({
                sucess: true,
                msg: `Member ${name} was created.`,
                newMember
            });
        } else {
            res.status(404).json({
                success: false,
                msg: `The member name isn't a string.`
            });
        }

    } catch (error) {
        res.status(404).json({
            success: false,
            msg: `Can't create a new member.`
        });
    };
};
module.exports = {
    getAll,
    create
}