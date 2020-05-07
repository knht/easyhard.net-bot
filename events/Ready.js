const { Event, Logger } = require('chariot.js');
const { guildModeID, logChannelID } = require('../config/config');

class Ready extends Event {
    constructor() {
        super('ready');
    }

    async execute() {
        Logger.event(`EASYHARD.NET Bot is ready in ${this.client.guilds.size} ${this.client.guilds.size === 1 ? 'guild' : 'guilds'}!`);

        this.client.editStatus('online', { name: 'Minecraft', type: 0 });

        const guildToLogIn = this.client.guilds.get(guildModeID);

        if (!guildToLogIn) {
            return Logger.warn('INVALID GUILD ID', `Couldn't retrieve guild by the ID specified in the configuration. Please validate for any typos!`);
        }

        const logChannel = guildToLogIn.channels.get(logChannelID);

        if (!logChannel) {
            return Logger.warn('INVALID LOG CHANNEL ID', `Couldn't retrieve log channel by the ID specified in the configuration. Please validate for any typos!`);
        }

        this.client.logChannel = logChannel;
    }
}

module.exports = new Ready();