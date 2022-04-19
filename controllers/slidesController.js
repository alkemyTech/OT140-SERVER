const Slide = require('../models').Slide;

const postSlide = async(req, res) => {
    const { imageUrl, text, order, organizationId } = req.body;
    const slide = await Slide.create({ imageUrl, text, order, organizationId });
    res.status(201).json({ msg: "Slide created successfully", slide });
}

const updateSlide = async(req, res) => {
    const { id } = req.params
    const { imageUrl, text, order, organizationId } = req.body

    const slide = await Slide.findByPk(id);

    if (!slide) {

        res.status(404).json('Slides doesnt exist');
    } else {

        await Slide.update({
            imageUrl: imageUrl,
            text: text,
            order: order,
            organizationId: organizationId
        }, { where: { id } });

        const updatedSlide = await Slide.findByPk(id)

        res.status(201).json({
            msg: 'Slide Updated',
            updatedSlide: updatedSlide
        });
    }
}

const getById = async(req, res) => {
    try {
        const { id } = req.params;
        const getId = await Slide.findByPk(id);
        !getId
            ?
            res.status(404).send(`The slide with id ${id} was not found!`) :
            res
            .status(201)
            .json(getId);
    } catch (err) {
        res.status(500);
    }
};


module.exports = {
    postSlide,
    updateSlide,
    getById
};