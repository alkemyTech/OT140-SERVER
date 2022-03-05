const { Categories } = require('../models/index');


const getCategories = async(req, res) => {

    let limit = 10;
    let offset = 0;
    const data = await Categories.findAndCountAll();
    let page = req.params.page; // page number
    let pages = Math.ceil(data.count / limit);
    offset = limit * (page - 1);

    const previousPage = page - 1;
    const nextPage = page + 1;

    const categorias = await Categories.findAll({
        attributes: ['name']
    });

    res.status(200).json({ 'result': categorias, 'count': data.count, 'pages': pages, 'previousPage': previousPage, 'nextPage': nextPage });
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