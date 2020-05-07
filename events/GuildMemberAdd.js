const { Event, Logger } = require('chariot.js');
const { roleOnJoinID, guildModeID } = require('../config/config');

class GuildMemberAdd extends Event {
    constructor() {
        super('guildMemberAdd');
    }

    async execute(guild, member) {
        if (guild.id !== guildModeID) return;
        
        if (!member.roles.includes(roleOnJoinID)) {
            try {
                await member.addRole(roleOnJoinID, 'User joined for the first time');
                Logger.event(`A new member joined the guild and was assigned the auto-join role!`);
            } catch (roleAddError) {
                Logger.error('ROLE ADD ERROR', roleAddError);
            }
        } 
    }
}

module.exports = new GuildMemberAdd();