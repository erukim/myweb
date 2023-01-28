const router = require('express').Router();
require('moment-timezone')
var moment = require('moment')
moment.tz.setDefault("Asia/Seoul");
const { readFile } = require('fs')

router.get('/', async function (req, res) {
    res.render('index', {
        title: "Erukim - 메인",
        wrong: false,
        ready: false,
        notfoundserver: false,
    })
});

router.get('/robots.txt', async (req, res) => {
    res.type("text/plain");
    res.send(
        "User-agent: *\nAllow:/"
    );
})
module.exports = router;