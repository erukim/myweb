const router = require('express').Router();

router.get('/:code.png', async function (req, res) {
    router.use('/web/public', serveStatic(path.join(process.cwd(), './public/Images')));
    readFile(`../public/Images/${req.params.code}.png`, function (err, data) {
        if (err) { res.send() }
        res.end(data)
    })
});
router.get('/:code.jpg', async function (req, res) {
    router.use('/web/public', serveStatic(path.join(process.cwd(), './public/Images')));
    readFile(`../public/Images/${req.params.code}.jpg`, function (err, data) {
        if (err) { res.send() }
        res.end(data)
    })
});
router.get('/:code.jpge', async function (req, res) {
    router.use('/web/public', serveStatic(path.join(process.cwd(), './public/Images')));
    readFile(`../public/Images/${req.params.code}.jpge`, function (err, data) {
        if (err) { res.send() }
        res.end(data)
    })
});
module.exports = router;