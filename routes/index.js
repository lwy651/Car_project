var express = require('express');
var router = express.Router();
var car = require('../controller/mongodb_connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = {id:0};
  car.CarLights.find({id:0},function(error,doc){
    if(error){
      console.error(error);
    }
    else {
      console.log(doc.length);
      res.json(JSON.stringify(doc));
    }
  });
  //res.send("cardb");
});

router.get('/login',function(req,res){
  res.render('login');
});
router.post('/login',function(req,res){
  console.log(req.body);
});


module.exports = router;
