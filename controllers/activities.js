const db = require('../models/index');

const getAll = async(req, res) => {

    try {
        const activities = await db.Activities.findAll({
            attributes: ['name', 'image', 'content']
        });
        res.status(200).json(
            activities)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
};

const getById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const activity = await db.Activities.findOne({
            where: {
                id
            },
        });
        !activity
            ?
            res.status(404).send("Activity not found") :
            res
            .status(201)
            .send({ data: activity, message: "Activity succesfully found" });
    } catch (err) {
        res.status(500);
    }
};

const createActivity = async(req, res) => {
    try {
        const { name, content } = req.body;
        const activity = await db.Activities.create({
            name,
            content
        })
        res
            .status(200)
            .send({
                data: activity,
                message: "Activity succesfully created."
            });

    } catch (err) {
        res.status(500);
    }
};

const updateActivity = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, content } = req.body;

        const activity = await db.Activities.findByPk(id);

        if (!activity) {
            res.status(404).json('The activity does not exist');
        } else {
            await db.Activities.update({
                name: name,
                content: content,
            }, {
                where: { id }
            })

            const activityUpdated = await db.Activities.findByPk(id)

            const response = {
                statusCode: 201,
                msg: 'Activity successfully updated',
                activityUpdated
            }
            res.status(201).json({ response });
        }

    } catch (err) {
        const response = {
            status: 500,
            msg: 'internal server error'
        }
        res.status(500).json({ response })
    }
}

module.exports = {
    getAll,
    getById,
    createActivity,
    updateActivity
}