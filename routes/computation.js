var express = require('express');
var router = express.Router();
var rand;
var root;

/* GET computation listing. */
router.get('/', function(req, res, next) {
rand = Math.floor(Math.random()*100);
// const urlParmas = new URLSearchParams(url.parse(req.params))
// let x = urlParmas.get('x')
  if(req.query.x){
    rand = req.query.x;
  }
  root = Math.sqrt(rand);
  res.send('Sqrt applied to '+rand+' is '+root);
  
});

module.exports = router;
