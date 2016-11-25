var express = require('express');
var db = require('../db');
var router = express.Router();

var model = require('./resource_model');
var dao = require('./resource_dao');
var controller = require('./resource_controller');

router.get('/',controller.index.bind(controller));

module.exports = router;
