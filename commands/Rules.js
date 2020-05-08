const { Command } = require('chariot.js');
const { INVITE, BANNER_IMAGE } = require('../constants/Links');

class Rules extends Command {
    constructor() {
        super();

        this.name = 'dczasady';
        this.aliases = ['rules'];
        this.cooldown = 5;
        this.owner = true;
    }

    async execute(message, args, chariot) {
        await message.channel.createMessage(BANNER_IMAGE);
        await message.channel.createMessage(
            'Witajcie na serwerze discord **EASYHARD.NET** (<' + INVITE + '>)\n\n' +
            '***ZASADY SERWERA DISCORD***\n' +
            '1. Postaraj się unikać drażliwych tematów (polityka,religia itd.).\n' +
            '2. Jakiekolwiek przypadki rasizmu, czy dyskryminacji nie będą tolerowane.\n' +
            '3. Reklamować swoje streamy możecie na kanale #:video_camera:ㅣstreamy , a wasze filmiki na #:tv:ㅣmedia.\n' +
            '4. Nie spamujmy nadmiernie.\n' +
            '5. Szanuj decyzje Administracji serwera Minecraft oraz Administracji serwera discord.\n' +
            '6. No i na logikę szanujmy się.'
        );
    }
}

module.exports = new Rules();