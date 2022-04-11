const { check, query, validationResult } = require("express-validator");

const validateComment = [
  check("user_id")
        .notEmpty()
        .withMessage('Cannot be empty')
        .isInt()
        .withMessage('No letters or signs are allowed. Only numbers'),
  check("body")
        .notEmpty()
        .withMessage('please enter the text')
        .isLength({ min: 20, max: 250 }).
        withMessage('The body must contain between 20 and 250 characters'),

  check('post_id')
        .notEmpty()
        .withMessage('Cannot be empty')
        .isInt()
        .withMessage('No letters or signs are allowed. Only numbers'),

    (req, res, next)=> {
        validateResult(req, res, next)
    }
];
const listComments = [
    query('order')
      .custom( value => { 
        if(value && value !== 'ASC' && value !== 'DESC'){
            throw new Error('order must be asc or desc')
        }
        return true
    }),
    query('page')
      .if((value)=>{ return value !== undefined })
      .isInt()
      .withMessage('No letters or signs are allowed. Only numbers'),
    (req, res, next)=> {
        validateResult(req, res, next)
    }
];

const validateResult = (req, res, next) => {
    try{
        validationResult(req).throw()
        return next()
    }catch(err){
        res.status(403).send({errors: err.array()})

    }

}

module.exports = { validateComment, listComments };