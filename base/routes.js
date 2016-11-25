var express = require('express');
var router = express.Router();

router.use('/resources',require('./resource/resource_routes'));

router.use(function(req,res,next){
  var err = new Error('Not found');
  err.status = '404';
  next(err);
});

module.exports = router;
