var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('new', { title: 'Express' });
});

router.get('/submit', function(req, res) {
  res.render('new-submit', { title: 'Express' });
});

router.get('/administr', function(req, res) {
  res.render('admin', { password: 'rainySparkyDays' });
});

module.exports = router;
