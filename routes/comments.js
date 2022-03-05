const express = require('express');
const router = express.Router();

const {getComments}=require('../controllers/comments');

router.get('/', getComments);

module.exports= router;