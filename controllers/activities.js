const db = require('../models/index');



const updateActivity = async (req, res) => {
    try {
        const {id}= req.params;
        const {name,content} = req.body;

        const activity = await db.Activities.findByPk(id);

        if(!activity){
            res.status(404).json('The activity does not exist'); 
        }
        else{
          const activityUpdate =  await db.Activities.update({              
                    name : name,
                    content : content,
                    },{
                        where : {id : id}
                    })
    
          
            const response = {
                statusCode: 201,
                msg : 'Activity successfully updated',
                activityUpdated : activityUpdate
            }
            res.status(201).json({ response });
        }

    } catch (err) {
        const response = {
            status : 500,
            msg :'internal server error'
        }
        res.status(500).json({ response })
    }
}

module.exports = {updateActivity}