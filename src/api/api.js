const Controller = require('../controllers/index');
var express = require('express');
var router = express.Router();

router.get('/movie/all', Controller.getAllMoviesCtrl );


module.exports=router;
