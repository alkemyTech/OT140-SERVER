const { Slide } = require("../models/index");

const getAll = async(req, res) => {
    try {
        const get = await Slide.findAll({
            attributes: ["imageUrl", "order"]
        });
        res.status(200).json({
            success: true,
            get
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Can't get slides.",
            err
        })
    };
};

module.exports = getAll;