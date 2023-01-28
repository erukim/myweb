var DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport')
const { config, dashboard } = require('../../bot/config')
const DiscordUser = require('../models/Dashboard/User')
const { encrypt, decrypt } = require('../utils/utils')
const Logger = require('../utils/Logger')
const logger = new Logger('Mora Web - discordstrategy')
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await DiscordUser.findById(id);
    if (user)
        done(null, user)
})

passport.use(new DiscordStrategy({
    clientID: config.bot.clientId,
    clientSecret: dashboard.Secret,
    callbackURL: dashboard.callbackURL,
    scope: ['identify', 'email', 'guilds', 'guilds.join']
}, async (accessToken, refreshToken, profile, done) => {
    const isAdmin = dashboard.owners.includes(profile.id);
    try {
        const updatedUser = await DiscordUser.findOneAndUpdate({ Id: profile.id }, {
            Id: profile.id,
            username: profile.username,
            email: profile.email,
            discriminator: profile.discriminator,
            tag: profile.username + "#" + profile.discriminator,
            avatar: profile.avatar || "Null",
            avatarURL: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}?size:1024` || "Null",
            guilds: profile.guilds || null,
            admin: isAdmin,
        })
        if (updatedUser) {
            return done(null, updatedUser)
        } else {
            const newUser = await DiscordUser.create({
                Id: profile.id,
                username: profile.username,
                email: profile.email,
                discriminator: profile.discriminator,
                tag: profile.username + "#" + profile.discriminator,
                avatar: profile.avatar || "Null",
                avatarURL: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}?size:1024` || "Null",
                guilds: profile.guilds || "Null",
                accessToken: accessToken,
                refreshToken: refreshToken,
                admin: isAdmin,
            })
            const savedUser = await newUser.save()
            return done(null, savedUser)
        }
    } catch (err) {
        logger.error(err)
        done(err, null)
    }
}));