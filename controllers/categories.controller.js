const {Category} = require('../models/index')

const getCategoryById = async (req, res, next) => {
    try{
        const {id} = req.params;
        const category = await Category.findOne({
            where: {
                id
            }
        })
        !category
            ? res.status(404).send('Category not found')
            : res.send(category)

    }catch(err){
        next(err)
    }
}

module.exports = {getCategoryById}