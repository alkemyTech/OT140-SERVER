const db = require('../models/index');

const create = async ( req, res) => {

    try {
        const {user_id,body,post_id} = req.body;
            const CommentCreate =  await db.Comment.create({
               user_id : user_id,
               body: body,
               post_id: post_id,
           });
           const response ={
               status : 201,
               msg : `comment ${CommentCreate.id} has ben created`,
           };
           res.status(201).json({ response });

    } catch (err) {
        const response = {
            status : 500,
            msg :'internal server error',
            errors: err.message
        }
        res.status(500).json({ response })
    };
};


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
const listComments = async (req, res) => {
    try {
        const { order = 'ASC', page = 1 } = req.query;
        const limit = 10;
        let offset = limit * (page - 1);
        const { count, rows } = await db.Comment.findAndCountAll({
          attributes: ['email'],
          offset,
          limit,
          order:[ ['createdAt', order] ]
        });
        let pages = Math.ceil(count / limit);
        const prevPage = page > 1 && pages > 1 ? page - 1 : '';
        const nextPage = page < pages ? parseInt(page) + 1 : '';
        res.status(200).json({
          totalItems: count,
          previousPage:
            prevPage > 0
              ? `${req.protocol}://${req.get('host')}/news/list/?page=${prevPage}`
              : '',
          nextPage:
            page < pages
              ? `${req.protocol}://${req.get('host')}/news/list/?page=${nextPage}`
              : '',
          items: rows,
        });
    } catch (error) {
        res.status(500).json({msg: 'Internal server error'});
    }
}


module.exports = { create, update, remove, listComments };