const { Event, RichEmbed } = require('chariot.js');
const { guildModeID } = require('../config/config');

class MessageUpdate extends Event {
    constructor() {
        super('messageUpdate');
    }

    async execute(newMessage, oldMessage) {
        if (!newMessage.editedTimestamp) return;
        if (newMessage.channel.guild.id !== guildModeID) return;

        const notificationMessage = new RichEmbed().setColor('RED').setTitle('Message Edit');

        if (oldMessage === null) {
            notificationMessage.setDescription('An **uncached** message has been edited! Fields may or may not be empty.');
            notificationMessage.addField('Message ID', newMessage.id, true);
            notificationMessage.addField('Channel', `<#${newMessage.channel.id}>`, true);
            notificationMessage.addField('Old Message', `Can't be retrieved`, false);
            notificationMessage.addField('New Message', (newMessage.content) ? newMessage.content : `Can't be retrieved`, false);
        } else {
            notificationMessage.setDescription('A **cached** message has been edited! Fields may or may not be empty.');
            notificationMessage.addField('Message ID', newMessage.id, true);
            notificationMessage.addField('Channel', `<#${newMessage.channel.id}>`, true);
            notificationMessage.addField('User', `**${newMessage.author.username}#${newMessage.author.discriminator}** *(ID: ${newMessage.author.id})*`, false);
            notificationMessage.addField('Old Message', (oldMessage.content) ? oldMessage.content : `Can't be retrieved`, false);
            notificationMessage.addField('New Message', (newMessage.content) ? newMessage.content : `Can't be retrieved`, false);
            notificationMessage.setThumbnail(newMessage.author.dynamicAvatarURL('jpg', 256));
        }

        this.client.logChannel.createEmbed(notificationMessage);
    }
}

module.exports = new MessageUpdate();