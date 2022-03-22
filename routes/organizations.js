const router = require('express').Router();
const { getOrganization } = require('../controllers/organization');
const { updateOrganization } = require('../controllers/organizations');
const { organizationUpdateForm } = require('../middlewares/validations');


router.get('/public', getOrganization)
router.patch('/public/:id', [
    organizationUpdateForm
], updateOrganization)

module.exports = router;
