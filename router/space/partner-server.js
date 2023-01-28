const router = require('express').Router();
require('moment-timezone')
var moment = require('moment')
const config = require('../../config');
moment.tz.setDefault("Asia/Seoul");
const { client_space } = require('../../app')

router.get('/', async function (req, res) {
    res.render('space/partner-server/index', {
        title: "𝒔𝒑𝒂𝒄𝒆 - 𝐩𝐚𝐫𝐭𝐧𝐞𝐫 𝐬𝐞𝐫𝐯𝐞𝐫",
    })
});

router.get('/notice', async function (req, res) {
    const ch = await client_space.channels.cache.get(config.bot.space.partner_server.notice)
    let msgs = [];
    await ch.messages.fetch().then(messages => {
        messages.forEach(msg => msgs.push(msg))
    });
    res.render('space/partner-server/notice', {
        title: "𝐩𝐚𝐫𝐭𝐧𝐞𝐫 𝐬𝐞𝐫𝐯𝐞𝐫 - 공지사항",
        bot: client_space,
        moment: moment,
        msg: msgs
    })
});

module.exports = router;
