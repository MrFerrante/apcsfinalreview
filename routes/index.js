var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/submit', function(req, res) {
  res.render('submit', { title: 'Express' });
});

router.get('/administr', function(req, res) {
  res.render('admin', { password: 'rainySparkyDays' });
});

module.exports = router;
