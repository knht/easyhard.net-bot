# EASYHARD.NET Discord Bot
This is a bot specifically made for operating on the EASYHARD.NET Discord guild. 

# Installation
Instructions for running the bot on Docker:
1. Clone this repository: `git clone https://github.com/riyacchi/easyhard.net-bot.git`
2. Change the directory to the freshly cloned repository: `cd easyhard.net-bot`
3. Rename the example config file and fill out the configuration: `mv config/example.config.js config/config.js`
    - IMPORTANT: Snowflakes (Channel, Guild and Role IDs) are supposed to be **Strings**!
4. Within the project root directory run following command to build a Docker image:
    - `docker build -t riyacchi/easyhardnetbot .`
5. Run the following command to run the bot detached and with restarts on failure enabled set to true:
    - `docker run --restart always riyacchi/easyhardnetbot`

# Support & License
I won't provide any support for this repository as it's basically just a specialty bot for a single guild and not meant to be used over and over again. However if you want to use the code feel free to do so, as this repository is licensed under the [MIT License](https://opensource.org/licenses/MIT) and can be freely reused in any way.