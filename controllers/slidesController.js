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

const get = async(req, res) => {

    const slideUn = await Slide.findAll();
    res.status(200).json(slideUn);
};

const getById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const getId = await Slide.findByPk(id);
        !getId
            ?
            res.status(404).send("Slide not found") :
            res
            .status(201)
            .send({ data: getId, message: "Slide succesfully found" });
    } catch (err) {
        res.status(500);
    }
};


module.exports = {
    postSlide,
    updateSlide,
    get,
    getById
};