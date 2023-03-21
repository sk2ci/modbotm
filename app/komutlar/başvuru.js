
//---Bu Kod komutlar klasörüne atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###MareFi

const Discord = require("discord.js");

  exports.run = async (client, message, args) => {
  	let kanal =  "başvuru-kanal"
  	let kanal2 =  "log"
  	let mesaj = args.slice(0).join('1314')
  	if (!mesaj) return message.channel.send(`Merhaba gerekli şeyi unuttunuz başvuru mesajınızı yazıp tekrar deneyin.`).then(x => x.delete({timeout: 3000}))
  	if (message.channel.id !== kanal2) return message.channel.send(`:red_square: Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const cmf = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("Cyrus Başvuru")
  .setDescription(mesaj)
  .setFooter("Başvuru Sahibi: "+ message.author.tag)
  client.channels.cache.get(kanal).send(cmf)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["başvuru-yap"],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-yap',
  usage: 'CodeMareFi'
};