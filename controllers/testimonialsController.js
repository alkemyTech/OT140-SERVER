const { Testimonial } = require('../models')
const { validationResult } = require ('express-validator');


const create = async(req, res) => {
   
    let errors = validationResult(req);
        //Check Validations errors, 
        if (errors.isEmpty()){
            // if there are no errors, create testimony
            try {
                const { name, image, content } = req.body;
               
                    const newTestimony = await Testimonial.create({ 
                        name: name,
                        image: image ? image : null,
                        content: content
                    });
                    
                    res.status(200).json({
                        msg: `New testomony was created.`,
                        data: newTestimony
                    });
                
            } catch (error) {
                res.status(404).json({error});
            };
        // if validation fail, return the errors    
        } else {
            res.status(500).json(errors.mapped())
        }
};

const update = async (req, res) => {
    
    const { id } = req.params
    const { name, image, content } = req.body
    //Look for the testimony by id
    const testimony = await Testimonial.findByPk(id);
     //Message if the testimony not exists
    if (!testimony) {
        res.status(404).json('Testimony not found');
       // Update the testimony
    } else {
        await Testimonial.update({
            name: name, 
            image: image, 
            content: content, 
        },
            { where: { id }}
        );
        const updatedTestimony = await Testimonial.findByPk(id)
        
        res.status(201).json({
            msg: 'testimony Successfully Updated',
            updatedTestimony:updatedTestimony
        });
    }
  };

  const deleteTestimony = async (req, res) => {

    try {
        const { id } = req.params;

        const testimony = await Testimonial.findByPk(id);
        //Message if the testimony not found
        if (!testimony) {
            res.status(404).json('Testimony not found');
        //Found the testimony and deleted
        } else {

            await Testimonial.destroy( {
                where: { id }
            })
            res.status(201).json({ msg: 'The testimony was correctly deleted' })
        }

    } 
    catch (err) {res.status(500).json({ 
        msg: 'ERROR - the testimony couldn`t be deleted' })
    }
};

const getAll = async (req, res) => {

    let pageSize = req.query.page
    let pageLimit = 10;
    
    const limit = parseInt(pageLimit, 10) || 10;
    const page = parseInt(pageSize, 10) || 1;
    
    const { count, rows} = await Testimonial.findAndCountAll({
        
        attributes: ['name', 'image', 'content'],
        order: [['updatedAt', 'DESC']],
        limit: limit,
        offset: limit * (page - 1)
    });
    
    const getNextPage = (page, limit, total) => {
        if ((total/limit) > page) {
            return page + 1;
        }
        console.log(page)
        return null
    }
    
    const getPreviousPage = (page) => {
        if (page <= 1) {
            return null
        }
        return page - 1;
    }
    
    res.status(200).json({
        previousPage: getPreviousPage(page),
        currentPage: page,
        nextPage: getNextPage(page, limit, count),
        limit: limit,
        total: count,
        data:rows  })
}

module.exports = {
    create,
    update,
    deleteTestimony,
    getAll
}