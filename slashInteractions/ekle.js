const {
	SlashCommandBuilder,
  EmbedBuilder
} = require('discord.js');
const { QuickDB } = require("quick.db")
const db = new QuickDB()
const ayarlar = require("../ayarlar.json")
const fetch = require("node-fetch")

module.exports = {
	name: "link-ekle",
	command: new SlashCommandBuilder().setName("link-ekle").setDescription("Linkinizi sisteme eklersiniz.").addStringOption(o => o.setName("link").setDescription("Uptime edilcek link.").setRequired(true)),
	async run(client, int, reply) {

    let link = int.options.getString("link")
    let linkler = await db.get("linkler")
    
if(!link.startsWith("http")) return await reply(`Geçerli bir link gir!`)
if(linkler.map(x => x.url).includes(link)) return await reply(`Projeniz zaten kayitli.`)

fetch(link)
await db.push("linkler", { url: link, owner: int.user.id })
reply(`<a:dektiks:942549885171953704> **Projeniz başarıyla eklendi** <a:dektiks:942549885171953704>
       
       <a:developerbotsdsd:1073699404999045140> **Bot : Linkin Eklendiği Bölge** : Almanya/Saksonya <a:germany:1073700364777439273> 
      
       <a:press:1073698644122947644> **Premium** : <a:noo:1073699076576641044>`)
    
client.channels.cache.get(ayarlar.log).send({embeds:[new EmbedBuilder().setDescription(`Uptime Link: ${link}`).setAuthor({name:int.user.tag, iconURL:int.user.displayAvatarURL({dynamic:true})}).setTimestamp()]})
	}
};