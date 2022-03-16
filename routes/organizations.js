const router = require('express').Router();
const { getOrganization, getSlide } = require('../controllers/organization');

router.get('/public', getOrganization)

module.exports = router;
