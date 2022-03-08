const New = require('../models').New;

const deleteNew = async ( req, res ) => {

    const { id } = req.params;
    let newToDelete = await News.findByPk( id );

    // if it's deleted
    if ( !newToDelete  || newToDelete.deletedAt) {
        return res.status( 404 ).json({ msg: 'New not found or already deleted' });
    }

    // if it's not deleted, soft-delete it
    newToDelete.deletedAt = Date.now();
    await newToDelete.save();
    return res.status( 200 ).json({ msg: 'New deleted successfully' });

}

module.exports = {
    deleteNew
};