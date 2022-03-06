const { Slide } = require("../models/index");

const getAll = async(req, res) => {
    try {
        const getSlides = await Slide.findAll({
            attributes: ["imageUrl", "order"],
        });
        res.status(200).json({
            success: true,
            getSlides,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Can't get slides.",
            err,
        });
    }
};

const getById = async(req, res) => {
    const { id } = req.params;
    try {
        const getSlideById = await Slide.findByPk(id);
        res.status(200).json({
            success: true,
            getSlideById,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: "Slide doesn't exist.",
            error,
        });
    }
};

const remove = async(req, res) => {
    const { id } = req.params;
    try {
        await Slide.destroy({
            where: { id },
        });
        res.status(200).json({
            success: true,
            msg: `The slide with the id ${id} has been removed.`
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: `Slide with the id ${id} not found.`,
            error,
        });
    }
};

module.exports = {
    getAll,
    getById,
    remove,
};