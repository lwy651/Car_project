var express = require('express');
var router = express.Router();
var car = require('../controller/mongodb_connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'主页'});
  //res.send("cardb");
});

router.get('/login',function(req,res){
  if(req.session){
    console.log(req.session.username+"...........");
  }
  res.render('login');
});
router.post('/login',function(req,res){
  var username = req.body.username;
  car.User.findOne({username:req.body.username},function(err,doc){
    if(err){
      res.send(err);
      console.log(err);
    }else if(!doc){
      //req.session.error = '用户名不存在';
      //res.send(404);
      console.log('用户名不存在');
      res.render('login');
    }else {
      if(req.body.password == doc.password){
        req.session.username = doc.username;
        req.session.save();
        res.redirect("main");
      }
      else {
        res.render('login');
      }
    }
  });
});

router.get('/main',function(req,res){
  res.render("main");
});


module.exports = router;
