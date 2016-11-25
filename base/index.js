var express = require('express');
var app = express();

app.use('/',require('./routes'));

app.use(function(err,req,res,next){
  console.log('Server error',err);
  res.status(err.status || 500).json(err.message);
});

app.listen(8080,function(){
  console.log('Server listening at port 8000');
});
