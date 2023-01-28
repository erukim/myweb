const router = require('express').Router();

router.get('/', async function (req, res) {
    res.redirect('https://erukim.dooray.com/mail/systems/inbox')
});
module.exports = router;