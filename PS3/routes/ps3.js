var express = require('express');
var router = express.Router();


router.get('/doGet', function(req, res, next) {
    res.render('ps3', {str:'This is Ps3'});
});



router.post('/doPost',function (req,res,next) {

    console.log(JSON.stringify(req.body));

    res.render('ps3', {str:JSON.stringify(req.body)});

})

module.exports = router;
