var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

var title = 'Job Search DB';

router.get('/', function(req, res, next) {
    res.render('index', { user: req.user, title: title });
});

router.get('/register', function (req, res) {
    res.render('register', { title: title });
})

router.post('/register', function (req, res) {
   Account.register (new Account( { username: req.body.username }), req.body.password, function (err, account) {
       if (err) {
           return res.render('register', { account: account, title: title });
       }

       passport.authenticate('local')(req, res, function () {
           res.redirect('/');
       });
   });
});

router.get('/login', function (req, res) {
    res.render('login', {user: req.user, title: title});
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function (req, res) {
    res.status(200).send('pong!');
});

module.exports = router;
