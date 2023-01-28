const router = require('express').Router();
require('moment-timezone')
var moment = require('moment')
moment.tz.setDefault("Asia/Seoul");

router.get('/', async function (req, res) {
    res.render('space/partner/index', {
        title: "𝒔𝒑𝒂𝒄𝒆 - 𝐩𝐚𝐫𝐭𝐧𝐞𝐫",
    })
});

module.exports = router;
