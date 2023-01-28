const router = require('express').Router();

router.get('/', async function (req, res) {
    res.render('index', {
        title: "Erukim - 이루",
        wrong: false,
        ready: false,
        notfoundserver: false,
    })
});
module.exports = router;