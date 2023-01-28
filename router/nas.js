const router = require('express').Router();

router.get('/', async function (req, res) {
    res.redirect(`https://nas.hiplay.kr`)
});
module.exports = router;