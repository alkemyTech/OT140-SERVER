const { Comments } = require('../models/index');

const getCommentsByPost = async (req, res) => {

    const comments = await Comments.findAll({where: { post_id: req.params.id }});
    res.json(comments);
};

module.exports = {
    getCommentsByPost
}


