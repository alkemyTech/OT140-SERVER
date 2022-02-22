const activities = require('../models/activity');


const update = async (req, res, next) => {
    try {
        const {id}= req.params;
        const {name, image, content} = req.body;

        const activity = await activities.findByPk(id);

        if(!activity){
            res.status(404).json('The activity does not exist'); 
        }
        else{
          const activityUpdate =  await activity.update({              
                    name : name,
                    image : image,
                    content : content,
                    },{
                        where : { id : id}
                    })
          
            const response = {
                statusCode: 201,
                msg : 'Activity successfully updated',
                activityUpdate : activityUpdate
            }
            res.status(201).json({ response });
        }

    } catch (err) {
        const response = {
            status : 500,
            msg :'internal server error'
        }
        res.status(500).json({ response })
        next(err)
    }
}

module.exports = update;