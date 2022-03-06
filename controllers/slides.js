const { Slide } = require("../models/index");

const getAll = async(req, res) => {
    try {
        const getSlides = await Slide.findAll({
            attributes: ["imageUrl", "order"]
        });
        res.status(200).json({
            success: true,
            getSlides
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Can't get slides.",
            err
        })
    };
};

const getById = async(req, res) => {
    let { id } = req.params;
    try {
        const getSlideById = await Slide.findByPk(id);
        res.status(200).json({
            success: true,
            getSlideById
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: "Slide doesn't exist."
        })
    }
}

module.exports = {
    getAll,
    getById
};