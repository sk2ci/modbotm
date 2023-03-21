const Discord = require('discord.js');//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
const db = require('quick.db');

exports.run = async (client, message, args) => { 

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "1069869145409212416") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Lexy#9999 Bana Ulaşın```')

}

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "+";//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
  const embed = new Discord.MessageEmbed()

let yardım = new Discord.MessageEmbed()  
.setColor('#e7000e')
.addField('Cyrus Moderasyon Yardım Menüsü',`

>> **${prefix}küfürengel** : Sunucunuzda Küfür Yasaklar
>> **${prefix}reklam-engel** : Sunucunuzda Reklam Yasaklar
>> **${prefix}napimengel** : Sunucunuzda Napim Diyemezler
>> **${prefix}ban** : Etiketlediğiniz Kullancıyı Sunucudan Yasaklar
>> **${prefix}prefix** : Prefix Değiştirir
>> **${prefix}istatistik** : Botun Ne Durumda Oldugunu Görürsünüz.
>> **${prefix}bakım** : Botu Bakıma Alırsınız (Sadece bot sahibi kullanabilir)
>> **${prefix}sil** : Mesaj silersiniz (max 300)
>> **${prefix}temizle** : Mesaj silersiniz (max 300)
>> **${prefix}sohbet-aç** : Sohbeti açarsınız
>> **${prefix}sohbet-kapat** : Sohbeti kapatırsınız
>> **${prefix}patlat** : **Kanalı patlatırsınız**
>> **${prefix}davet** : Botumu Davet Edersiniz :)
==========ABONE ROL===========
`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=1073393528803180614&scope=bot%20applications.commands&permissions=2146958847) - [Destek Sunucumuz](Bulunmuyor)", )
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardım'],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon-yardım",
    description: "Moderasyon Komutları Gösterir."
};//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS