var mongoose = require('mongoose');

var ResourceModel = function(){

}

ResourceModel.prototype.sayHello = function(){
  console.log('Hello, I\'m resource '+this.id);
}

var schema = new mongoose.Schema({
  name: String
},{collection: 'resources'});

schema.methods = Object.create(ResourceModel.prototype);

module.exports = mongoose.model('Resource', schema);
