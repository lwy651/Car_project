var express = require('express');
var router = express.Router();
var car = require('../models/mongodb_connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'主页'});
  //res.send("cardb");
});

router.get('/login',function(req,res){
    if(req.cookies["account"]!=null)
    {
      console.log(req.cookies);
      console.log(req.account);
      console.log(req.cookies.account.a);
      res.redirect("main");
      return;
    }
  res.render('login');
});
router.post('/login',function(req,res){
  var username = req.body.username;
  console.log("aaaaaaaaaa");
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
        res.cookie('account',{a:651},{maxAge:60000});
        req.session.user = "aaaaaaaa";
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
