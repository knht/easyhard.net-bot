const { Client, Config } = require('chariot.js');
const { token, chariotOptions, erisOptions } = require('./config/config');

class EasyHardNetBot extends Client {
    constructor() {
        super(new Config(token, chariotOptions, erisOptions));
    }
}

module.exports = new EasyHardNetBot();