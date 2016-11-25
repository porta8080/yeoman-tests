var dao = require('./resource_dao');
var bluebird = require('bluebird');

function ResourceController(){
  this.dao = bluebird.promisifyAll(dao);
}

ResourceController.prototype.index = function(req,res,next){
  this.dao.findAllAsync()
  .then(function(data){
    res.json(data);
  })
  .catch(function(err){
    next(err);
  });
};

module.exports = new ResourceController();
