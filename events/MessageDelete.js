const { Event, RichEmbed } = require('chariot.js');
const { guildModeID } = require('../config/config');

class MessageDelete extends Event {
    constructor() {
        super('messageDelete');
    }

    async execute(message) {
        if (message.author && message.author.bot) return; 
        if (message.channel.guild.id !== guildModeID) return;

        const notificationMessage = new RichEmbed().setColor('RED').setTitle('Message Delete');

        if (!message.author || !message.content) {
            notificationMessage.setDescription(`An **uncached** message has been deleted!`);
            notificationMessage.addField(`Message ID`, message.id, true);
            notificationMessage.addField(`Channel`, `<#${message.channel.id}>`, true);
        } else {
            notificationMessage.setDescription(`A user's message got deleted`);
            notificationMessage.addField('User', `**${message.author.username}#${message.author.discriminator}** *(ID: ${message.author.id})*`, true);
            notificationMessage.addField('Channel', `<#${message.channel.id}>`, true);
            notificationMessage.addField('Original Message', message.content, false);
            notificationMessage.setThumbnail(message.author.dynamicAvatarURL('jpg', 256));
        }

        this.client.logChannel.createEmbed(notificationMessage);
    }
}

module.exports = new MessageDelete();