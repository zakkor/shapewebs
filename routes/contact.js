var express = require('express');
var router = express.Router();

/* GET contact */
router.get('/', function(req, res, next) {
    res.render('contact');
});

/* POST */
router.post('/', function(req, res, next) {
    res.send(req.body.message);
});

module.exports = router;
