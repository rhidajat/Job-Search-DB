var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var JobApplication = require('../models/jobApplication')
var router = express.Router();

router.get('/', function(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }
    res.render('index', {title: 'Job Application Page'});
});

router.get('/user', function(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }

    Account.find(function (err, accounts) {
        console.log(accounts);
        res.render('user',
            {
                title: 'Job Application Page',
                users: accounts
            });
    });
});

router.get('/application', function(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }

    res.render('application',
        {
            title: 'Job Application Page'
        });
});

router.get('/application/create', function (req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }

    res.render('create-application',
        {
           title: 'Create Application'
        });
})

module.exports = router;
