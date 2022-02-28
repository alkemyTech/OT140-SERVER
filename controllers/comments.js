const db = require('../models/index');


const list = async (req, res) => {
    const comments = await db.Comment.findAll();

    res.json(comments)
}

const update = async (req, res) => {

    try {
        const { id } = req.params;
        const { body } = req.body;

        const comments = await db.Comment.findByPk(id);
      
        if (!comments) {
         
            res.status(404).json('The comment does not exist');
     
        } else {

            await db.Comment.update({
                body: body,
            }, {
                where: { id: id }
            })
            const commentUpdated = await db.Comment.findByPk(id);
            const response = {
                status: 201,
                msg: 'comment updated',
                comment: commentUpdated
            }
            res.status(201).json({ response })
        }


    } catch (err) {
        const response = {
            status : 500,
            msg :'internal server error'
        }
        res.status(500).json({ response })
    }















}

module.exports = { list, update };