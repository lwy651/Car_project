var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CarDB')
var db = mongoose.connection;

db.on('error',function(error){
  console.log(error);
});
var mongooseSchema = new mongoose.Schema({
  id   :{type:Number},
  name :{type:String},
  model:{type:String}
});

var wheelSchema = new mongoose.Schema({
  name   :{type:String},
  model  :{type:String}
});

exports.CarLights = db.model('carlights',mongooseSchema);
exports.Wheel = db.model('wheel',mongooseSchema);
exports.db = db;
