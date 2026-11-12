var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

/* GET home page using /home */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'ABOUT' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'PROJECTS' });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'CONTACT' });
});

module.exports = router;
//MVC model(datebase) view(ejs filed) controller(routers)