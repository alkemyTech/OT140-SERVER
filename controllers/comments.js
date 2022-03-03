const db = require('../models/index');


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
                msg: 'updated commentary',
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
    };
};


 const remove = async (req, res) => {

        try {
            const { id } = req.params;
    
            const comments = await db.Comment.findByPk(id);
          
            if (!comments) {
             
                res.status(404).json('The comment does not exist');
         
            } else {
    
                await db.Comment.destroy( {
                    where: { id: id }
                })
        
                const response = {
                    status: 201,
                    msg: 'deleted commentary',
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

};


module.exports = { create, update, remove };