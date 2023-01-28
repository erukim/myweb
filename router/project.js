const router = require('express').Router();

router.get('/mora', async function (req, res) {
    res.render('project/mora', {
        title: "Erukim - MoraBot",
        wrong: false,
        ready: false,
        notfoundserver: false,
    })
});
module.exports = router;