const router = require('express').Router();
require('moment-timezone')
var moment = require('moment')
moment.tz.setDefault("Asia/Seoul");

router.get('/', async function (req, res) {
    res.render('shop/index', {
        title: "Shop - Main",
    })
});

router.get('/item-list/HighCent', async function (req, res) {
    res.render('shop/list/하이센트', {
        title: "Shop - 하이센트",
    })
});

router.get('/item-list/Clothing', async function (req, res) {
    res.render('shop/list/의류', {
        title: "Shop - 의류",
    })
});

router.get('/item-list/Food', async function (req, res) {
    res.render('shop/list/식품', {
        title: "Shop - 식품",
    })
});

router.get('/item-list/Food', async function (req, res) {
    res.render('shop/list/식품', {
        title: "Shop - 식품",
    })
});

module.exports = router;