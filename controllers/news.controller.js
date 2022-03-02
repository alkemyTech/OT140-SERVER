const {New} = require('../models/index')

const createNews = async (req, res) => {
    try{
        const {name, content, image, categoryId} = req.body;
        const newNews = await New.create({
            name,
            content,
            image,
            categoryId
        })
        res.status(200).send({message: 'New created', data: newNews})

    }catch(err){
        res.status(500)
        console.log(err)
    }
}

module.exports = {createNews}