'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {


    res.render('repair/repair_result', {
        session: req.session.user_id,
    });
   
});


module.exports = router;

