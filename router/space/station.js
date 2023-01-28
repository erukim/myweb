const router = require('express').Router();
require('moment-timezone')
var moment = require('moment');
const config = require('../../config');
moment.tz.setDefault("Asia/Seoul");
const { client_space } = require('../../app')

router.get('/', async function (req, res) {
    res.render('space/station/index', {
        title: "𝒔𝒑𝒂𝒄𝒆 - 𝒔𝒕𝒂𝒕𝒊𝒐𝒏",
    })
});

router.get('/notice', async function (req, res) {
    const ch = await client_space.channels.cache.get(config.bot.space.station.notice)
    let msgs = [];
    await ch.messages.fetch().then(messages => {
        messages.forEach(msg => msgs.push(msg))
    });
    res.render('space/station/notice', {
        title: "𝒔𝒕𝒂𝒕𝒊𝒐𝒏 - 공지사항",
        bot: client_space,
        moment: moment,
        msg: msgs
    })
});

module.exports = router;