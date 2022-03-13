const router = require('express').Router();
const { getOrganization } = require('../controllers/organization');


router.get('/public', getOrganization);

module.exports = router;
