const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/'

client.once('ready', () => {
    console.log('Saitsu is online!')
    client.user.setActivity("With Erge's emotions")
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'naoto') {
        message.channel.send('<a:naotodance:746218185019359332>');
    }
    else if (command === 'kiwi') {
        message.channel.send('<a:spinning_kiwi:758896501346402324>');
    }
    else if (command === 'online') {
        message.channel.send("Mods don't work online, you can't use mods with the normal version of the game, so any attempt of using mods will result in you getting disconnected. However, here are some alternatives: 1) Use a cloud service like Parsec to play with your friends. 2) Use the modded exe, both you and your friend will need to use it, otherwise you'll both get disconnected.");
    }
    else if (command === 'console') {
        message.channel.send("Listen, most modding communities don't support console modding, not only because it's impractical, but also because you actually void your warranty for the console due to you modifying it. Lastly, stuff like jailbreak CAN damage your console. So, please don't ask for mods on console.");
    }
    else if (command === 'lucas') {
        message.channel.send('<@219590638276968449> RESPONDÉ LOS DMS PEDAZO DE BASURA');
    }
    else if (command === 'mudkip2') {
        message.channel.send("He's fucking braindead man");
    }
    else if (command === 'mudkip') {
        message.channel.send('simp');
    }
    else if (command === 'saitsu') {
        message.channel.send('Nagito Komaeda stan');
    }
    else if (command === 'kechi') {
        message.channel.send("He's weeb and a nerd");
    }
    else if (command === 'kill') {
        message.channel.send('https://www.youtube.com/watch?v=1JR95qMfo9A');
    }
    else if (command === 'ultiam') {
        message.channel.send('https://media.discordapp.net/attachments/731593314897494096/734451592593670234/unknown.png?width=1442&height=624');
    }
    else if (command === 'hate') {
        message.channel.send('I hate it here, man.');
    }
    else if (command === 'chair') {
        message.channel.send('Shut the fuck up before I shove a folding chair up your ass, Erge <:GUN:749040707225780416>');
    }
    else if (command === 'erge') {
        message.channel.send('Erge is a little bitch');
    }
    else if (command === 'tekka') {
        message.channel.send('OwO');
    }
    else if (command === 'help') {
        message.channel.send('https://cdn.discordapp.com/attachments/711289885071507519/758940869708873758/prerequisites.mp4');
    }
    else if (command === 'joke') {
        message.channel.send("**yeah that's the fucking joke.**");
    }
    else if (command === 'unamused') {
        message.channel.send('https://cdn.discordapp.com/attachments/339880946826346498/662847082734026753/20200103_233707.png')
    }
    else if (command === 'nutshell') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/760284192751091712/unknown.png')
    }
    else if (command === 'pain') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/766808859653177364/Nagito_13.png?width=575&height=677')
    }
    else if (command === 'cry') {
        message.channel.send('https://cdn.discordapp.com/attachments/711289885071507519/768571880876933151/Shuichi_cry.png')
    }
    else if (command === 'bestgirl') {
        message.channel.send('https://cdn.discordapp.com/attachments/711289885071507519/769976278790438942/fba41cf521b57d036f075e2786643eb1.png')
    }
    else if (command === 'crop') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/770800235202215966/Z.png')
    }
    else if (command === 'cru') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/777652930235990057/Shuichi_cru.png?width=388&height=678')
    }
    else if (command === 'erge2') {
        message.channel.send('He do be a furry doe.')
    }
});

client.login(process.env.token);