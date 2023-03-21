let db = require("quick.db")
let ayarlar = require("../ayarlar.json")//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS

exports.run = async(client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "1069869145409212416") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya MONSTER#0002 Bana Ulaşın```')

}

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`❌ Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`❌ **Bir kanal etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonelog #kanal__**`)
  
  
  db.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`✅ **Abone kanalı başarıyla "${log}" olarak ayarlandı.**`)
}

exports.conf = {//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: 'el!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
  kategori: 'Abone'
}