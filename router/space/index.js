const router = require('express').Router();
require('moment-timezone')
var moment = require('moment')
moment.tz.setDefault("Asia/Seoul");

router.get('/', async function (req, res) {
    res.render('space/index', {
        title: "𝒔𝒑𝒂𝒄𝒆 - Main",
    })
});

module.exports = router;
