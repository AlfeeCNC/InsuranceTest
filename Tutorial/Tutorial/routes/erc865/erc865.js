'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('erc865/erc865', { session: req.session.user_id });
});

module.exports = router;