const router = require('express').Router();
const { updateOrganization, getOrganization } = require('../controllers/organizations');
const { organizationUpdateForm } = require('../middlewares/validations');


router.get('/public', getOrganization);
router.patch('/public/:id', [
    organizationUpdateForm
], updateOrganization)

module.exports = router;
