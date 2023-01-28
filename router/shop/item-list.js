const router = require('express').Router();
require('moment-timezone')
var moment = require('moment')
moment.tz.setDefault("Asia/Seoul");

router.get('/HighCent', async function (req, res) {
    res.render('shop/list/하이센트', {
        title: "Shop - 하이센트",
    })
});

router.get('/Clothing', async function (req, res) {
    res.render('shop/list/의류', {
        title: "Shop - 의류",
    })
});

router.get('/Food', async function (req, res) {
    res.render('shop/list/식품', {
        title: "Shop - 식품",
    })
});

module.exports = router;