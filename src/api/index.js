const express = require('express');
const router = express.Router();

const movieApi=require('./movie');
const MovieController = require('../controllers/index').MovieController;

router.use('/', movieApi(express.Router()));

module.exports=router;