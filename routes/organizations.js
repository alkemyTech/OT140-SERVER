const router = require('express').Router();

const { Organization } = require('../models');
const { updateOrganization } = require('../controllers/organizations');
const { organizationUpdateForm } = require('../middlewares/validations');


router.get('/', async function(req, res, next) {
    
    
    res.send('respond with a resource');
});
router.patch('/public/:id', [
    organizationUpdateForm
], updateOrganization)

module.exports = router;
