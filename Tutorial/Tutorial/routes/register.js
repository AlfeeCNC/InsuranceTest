var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    
    
    
    var pool = req.connection;
    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM user_info', function (err, rows) {
            if (err) {
                res.render('error', {
                    message: err.message,
                    error: err
                });
            }
            else {
                console.log(rows);
                rows = JSON.stringify(rows);
                res.render('register', { 
                    router_method: 'get',
                    rows: rows
                });

            }
        })
        connection.release();
    })
});

router.post('/', function(req, res){
    var name = req.body.user_name;
    var pass = req.body.user_password;

    var pool = req.connection;
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO user_info(username, userpassword) VALUES(?,?)', [name,pass],function (err, result) {
            if (err) {
                res.render('error', {
                    message: err.message,
                    error: err
                });
            }
            else {
                console.log(result);
                res.render('register', { 
                    router_method: 'post',
                    name: name,
                    pass: pass
                });

            }
        })
        connection.release();
    })

});
module.exports = router;
