const { name } = require('ejs');
const { Role } = require('../models/index');

const getAll = async(req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({
            success: true,
            roles
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: "Can't get roles."
        })
    };
};

const getById = async(req, res) => {
    let id = req.params.id;
    try {
        const rol = await Role.findByPk(id);
        res.status(200).json({
            success: true,
            rol
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: `Role with id ${id} doesn't exist.`
        })
    };
};

module.exports = {
    getAll,
    getById
};