const { Categories } = require('../models/index');


const getCategories = async(req, res) => {

    const categorias = await Categories.findAll({
        attributes: ['name']
    });
    res.json(categorias);
};

const updateCategories = async(req, res) => {

    const category = await Categories.findByPk(req.params.categorieId);
    if (!category) {
        res.status(404).json('The category doesn`t exist');
    } else {
        await Categories.update(req.body, {
            where: { id: req.params.categorieId }
        });
        res.status(201).json({ msg: 'Category Successfully Updated' });
    }
};

module.exports = {
    getCategories,
    updateCategories
};