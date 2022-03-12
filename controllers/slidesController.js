const Slide = require('../models').Slide;

const postSlide = async (req, res) => {
    const { imageUrl, text, order, organizationId } = req.body;
    const slide = await Slide.create({ imageUrl, text, order, organizationId });
    res.status(201).json({msg:"Slide created successfully", slide});
}


module.exports = {
    postSlide
};