module.exports = {
    token: '',                              // Discord API bot application token
    logChannelID: '',                       // Channel ID where the logs should be posted in
    roleOnJoinID: '',                       // Role ID of the role that should be assigned upon joining
    guildModeID: '',                        // Guild ID of the guild the bot should operate in
    chariotOptions: {       
        prefix: 'e!',                       // Command prefix
        defaultHelpCommand: false,          // Disabling the default help command
        owner: [                            // A list of user IDs "owning" the bot (e.g. for owner level commands)
            '',
        ],
        excludeDirectories: [               // Don't touch this
            'config'
        ]
    },
    erisOptions: {                          // Don't touch this
        messageLimit: 2500,
        restMode: true
    }
}