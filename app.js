const express = require('express');
const app = express();
const config = require('./config');
var compression = require('compression');
const passport = require('passport');
const path = require('path')
const cors = require('cors');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const Logger = require('./utils/Logger')
const logger = new Logger('Web - app')
const logger_discord = new Logger('Web - Discord')
const { Client } = require('discord.js')

// Client
const client_mora = new Client(config.bot.options)
const client_space = new Client(config.bot.options)

client_mora.login(config.bot.mora.token)
client_space.login(config.bot.space.token)

client_mora.on('ready', async () => logger_discord.info(`✅ | ${client_mora.user.tag} 로그인 완료`))
client_space.on('ready', async () => logger_discord.info(`✅ | ${client_space.user.tag} 로그인 완료`))

module.exports.client_mora = client_mora;
module.exports.client_space = client_space;

// Router
const indexRouter = require('./router/index.js');
const blogRouter = require('./router/blog');
const mailRouter = require('./router/mail');
const nasRouter = require('./router/nas');
const projectRouter = require('./router/project');
const shopRouter = require('./router/shop/index');
const item_listRouter = require('./router/shop/item-list')
const itemRouter = require('./router/shop/item')
const spaceRouter = require('./router/space/index')
const space_stationRouter = require('./router/space/station')
const space_partnerRouter = require('./router/space/partner')
const space_partnerserverRouter = require('./router/space/partner-server')
const imgRouter = require('./router/img');

app.use(cors())
app.use(compression());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/js')));
app.use(express.static(path.join(__dirname, '/public/vendor')));
app.use(express.static(path.join(__dirname, '/public/Images')));
app.use(cookieParser());

app.use(passport.initialize())
app.use('/', indexRouter)
app.use('/Blog', blogRouter)
app.use('/Mail', mailRouter)
app.use('/Nas', nasRouter)
app.use('/ProJect', projectRouter)
app.use('/Shop', shopRouter)
app.use('/Shop/item-list', item_listRouter)
app.use('/Shop/item', itemRouter)
app.use('/space', spaceRouter)
app.use('/space/station', space_stationRouter)
app.use('/space/partner', space_partnerRouter)
app.use('/space/partner-server', space_partnerserverRouter)
app.get('/status', (req, res) => { res.status(200).json({ status: 200 }) })
app.use('/img', imgRouter);


app.use((req, res, next) => {
    res.status(404);
    res.render('404', {
        title: "Erukim - Page Not Found!",
    })
});

app.use(function (error, req, res, next) {
    res.status(500);
    res.render('error', {
        title: "Erukim - 오류",
    })
    logger.error(error)
});

app.listen(config.root.port, () => {
    logger.info(`✅|${config.root.port}로 열렸습니다!`)
})