var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

router.get('/', function(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }
    res.render('index', {title: 'Job Application Page'});
});

module.exports = router;
