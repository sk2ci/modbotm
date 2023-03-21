
//---Bu Kod komutlar klasörüne atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###MareFi

const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bunu kullanma yetkin yok`)
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    })

    message.channel.send('Kanal başarıyla kapatıldı')

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['close'],
    permLevel: 0
}

exports.help = {
    name: 'kapat',
    description: 'Kanalı kapatır',
    usage: 'kapat'
}