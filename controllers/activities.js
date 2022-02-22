const { Activities } = require('../models/index');


const postActivities = async (req, res) => {
  try {
    const { name, content } = req.body;
    const activitie = await Activities.create({
      name,
      content
    })
    res.json(activitie);

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postActivities
};