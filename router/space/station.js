const router = require('express').Router();
require('moment-timezone')
var moment = require('moment');
const config = require('../../config');
moment.tz.setDefault("Asia/Seoul");
const { client_space } = require('../../app')

router.get('/', async function (req, res) {
    res.render('space/station/index', {
        title: "đđđđđ - đđđđđđđ",
    })
});

router.get('/notice', async function (req, res) {
    const ch = await client_space.channels.cache.get(config.bot.space.station.notice)
    let msgs = [];
    await ch.messages.fetch().then(messages => {
        messages.forEach(msg => msgs.push(msg))
    });
    res.render('space/station/notice', {
        title: "đđđđđđđ - ęłľě§ěŹí­",
        bot: client_space,
        moment: moment,
        msg: msgs
    })
});

module.exports = router;