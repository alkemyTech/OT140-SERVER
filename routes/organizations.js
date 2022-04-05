<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { getOrganization } = require('../controllers/organization');


=======
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
>>>>>>> 575873d1b6f8d169557b9b484441c05183438ce3

router.get('/public', getOrganization);


module.exports = router;