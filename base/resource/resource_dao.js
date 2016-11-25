var model = require('./resource_model');

function ResourceDAO(){
  this.model = model;
}

ResourceDAO.prototype.findAll = function(cb){
  this.model.find({},cb);
}

module.exports = new ResourceDAO();
