const Discord = require("discord.js");
const db = require("quick.db");//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS


exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "1069869369745735781") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya  Bana Ulaşın```')

}

const eğlence = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("<a:maple_leaf:742698148329291826> » Ellunati Sohbet Sistemi <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription(" **el!sohbet-aç** = Sohbeti açarsınız\n**el!sohbet-kapat** = Sohbeti Kapatırsınız\n")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, //Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
  guildOnly: false, 
   aliases: ["s-y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'sohbet',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'el!havadurumu'
}