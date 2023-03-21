const Discord = require('discord.js');
const db = require('quick.db');

let ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" Yetersiz **yetki!**")
  
  if (!args[0]){
    message.channel.send('** `+napimengel kapat/aç` Yazmalısın**')
  }
  if (args[0] === 'aç'){
    message.channel.send("** Napim Engel Aktıf**")
    
    db.set(`napim_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('** Napim Engel Başarıyla Kapatıldı**')
    
    db.set(`napim_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "napimengel",
  description: "Napim engel açar yada kapatır.",
  usage: "napim"
}