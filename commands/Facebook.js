const { Command } = require('chariot.js');
const { FACEBOOK } = require('../constants/Links');

class Facebook extends Command {
    constructor() {
        super();

        this.name = 'facebook';
        this.aliases = ['fb'];
        this.cooldown = 3;
    }

    async execute(message, args, chariot) {
        message.channel.createMessage(FACEBOOK);
    }
}

module.exports = new Facebook();