const Slide = require("../models").Slide;

const postSlide = async(req, res) => {
    const { imageUrl, text, order, organizationId } = req.body;
    const slide = await Slide.create({ imageUrl, text, order, organizationId });
    res.status(201).json({ msg: "Slide created successfully", slide });
};

const updateSlide = async(req, res) => {
    const { id } = req.params;
    const { imageUrl, text, order, organizationId } = req.body;

    const slide = await Slide.findByPk(id);

    if (!slide) {
        res.status(404).json("Slides doesnt exist");
    } else {
        await Slide.update({
            imageUrl: imageUrl,
            text: text,
            order: order,
            organizationId: organizationId,
        }, { where: { id } });

        const updatedSlide = await Slide.findByPk(id);

        await Slide.update({
            imageUrl: imageUrl,
            text: text,
            order: order,
            organizationId: organizationId
        }, { where: { id } });
        res.status(201).json({
            msg: "Slide Updated",
            updatedSlide: updatedSlide,
        });
    }
};

const deleteSlide = async(req, res) => {
    const { id } = req.params;
    try {
        await Slide.destroy({
            where: { id },
        });
        res.status(200).json({
            msg: `The slide with the id ${id} it was deleted.`,
        });
    } catch (error) {
        res.status(500).json({
            msg: `Internal Server error.`,
            error,
        });
    }
}

const listSlide = async(req, res) => {
    try {
        const list = await Slide.findAll({ attributes: ["imageUrl", "order"] });
        res.status(200).json({
            msg: "List of Images",
            list,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something wrong has happened,try again",
            error
        });
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
};

module.exports = {
    postSlide,
    updateSlide,
    deleteSlide,
    listSlide,
};