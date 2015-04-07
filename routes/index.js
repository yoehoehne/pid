var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var pid = 5;//process.pid
    console.log("ID "+pid);
    res.render('index', { title: 'Cluster', pid:pid });
});

module.exports = router;
