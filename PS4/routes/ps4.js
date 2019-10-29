const express = require('express');
const router = express.Router();
const rp = require('request-promise');

const requestOptions = {
    method: 'GET',
    uri: 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + encodeURI('深圳天气'),
    json: false,
    gzip: false
};
router.get('/', function (req, res, next) {
    rp(requestOptions).then(response => {
        var resp = String(response).split('�');
        var content = resp[0];
        var jsonContent = JSON.parse(content);
        console.log(jsonContent)
        res.render('ps4', {jsonContent})
    }).catch((err) => {
        console.log('API call error:', err.message);
    });
})

module.exports = router