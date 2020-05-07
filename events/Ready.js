const { Event, Logger } = require('chariot.js');

class Ready extends Event {
    constructor() {
        super('ready');
    }

    async execute() {
        Logger.event(`EASYHARD.NET Bot is ready in ${this.client.guilds.size} ${this.client.guilds.size === 1 ? 'guild' : 'guilds'}!`); 
    }
}

module.exports = new Ready();