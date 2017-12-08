var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `+`
    if (message.substring(0, 2) == '+') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // +Quest <user> <other_user> <other_user> <other_user>
            case 'Quest':
                bot.sendMessage({
                    to: channelID,
                    message: '*Takes the paper quest and signs the name of <user> <other_user> <other_user> <other_user> before giving it back with a smile*'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
