var express = require('express');
var path    = require('path');


var router = express.Router();

module.exports = router;


router.get('/', function(req, res){
  res.render('pages/home');
})

router.get('/admin', function(req, res){
  res.render('pages/admin')
})
