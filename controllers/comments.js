const { Comments } = require('../models/index');

const getComments = async (req, res) => {

    const comments = await Comments.findAll({
        attributes: ['body']
    });
    res.json(comments);
};

const getCommentsByPost = async (req, res) => {

    const comments = await Comments.findAll({where: { post_id: req.params.postId }});
    res.json(comments);
};

module.exports = {
    getComments,
    getCommentsByPost
}


