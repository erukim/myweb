const { Partials } = require('discord.js')
module.exports = {
    root: {
        port: 9002,
    },
    bot: {
        options: {
            intents: [131071],
            allowedMentions: { parse: ['users', 'roles'], repliedUser: false },
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.Message,
                Partials.Reaction,
                Partials.ThreadMember,
                Partials.User
            ],
        },
        mora: {
            token: ``
        },
        space: {
            token: ``,
            station: {
                serverid: ``,
                notice: ``,
            },
            partner_server: {
                serverid: ``,
                notice: ``,
            }
        },
    }
}