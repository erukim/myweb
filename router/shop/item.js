const router = require('express').Router();
require('moment-timezone')
var moment = require('moment')
moment.tz.setDefault("Asia/Seoul");

router.get('/Refillcartridge', async function (req, res) {
    res.render('shop/item/하이센트/리필_카트리지', {
        title: "Shop - 제품상세",
    })
});

module.exports = router;