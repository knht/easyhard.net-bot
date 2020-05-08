const { Command } = require('chariot.js');
const { WEBSITE } = require('../constants/Links');

class Website extends Command {
    constructor() {
        super();

        this.name = 'strona';
        this.aliases = ['website', 'web'];
        this.cooldown = 3;
    }

    async execute(message, args, chariot) {
        message.channel.createMessage(WEBSITE);
    }
}

module.exports = new Website();