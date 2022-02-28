const { Users } = require('../models/index');

const getAll = async(req, res) => {
    try {
        const users = await Users.findAll({
            //attributes: ['firstName']     //List of attributes to response json
        });
        res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: "Can't get all users."
        })
    };
};

const getById = async(req, res) => {
    let id = req.params.id;
    try {
        const userById = await Users.findByPk(id);
        if (!userById) {
            res.status(404).json({
                success: false,
                msg: `User with id ${id} doesn't exist.`
            });
        } else {
            res.status(200).json({
                success: true,
                userById
            });
        };
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: `User with id ${id} doesn't exist.`
        });
    };
};

module.exports = {
    getAll,
    getById
};