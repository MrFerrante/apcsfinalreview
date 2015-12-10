var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('new', { title: 'APCS' });
});

router.get('/test', function(req, res) {
  res.render('test', { title: 'APCS' });
});

router.get('/submit', function(req, res) {
  res.render('new-submit', { title: 'APCS' });
});

router.get('/test-submit', function(req, res) {
  res.render('test-submit', { title: 'APCS' });
});

router.get('/administr', function(req, res) {
  res.render('new-admin', { title: 'APCS' });
});

module.exports = router;
