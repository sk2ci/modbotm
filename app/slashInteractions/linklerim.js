const {
	SlashCommandBuilder,
  EmbedBuilder
} = require('discord.js');
const { QuickDB } = require("quick.db")
const db = new QuickDB()
const ayarlar = require("../ayarlar.json")

module.exports = {
	name: "üyelinkleri",
	command: new SlashCommandBuilder().setName("üyelinkleri").setDescription("Linklerinizi görüntüler").addStringOption(x => x.setName("id").setDescription("Bir kullanici id si girin.").setRequired(true)),
	async run(client, int, reply) {
    
  if(int.user.id !== ayarlar.sahip) return reply(`Bu komutu kullanmaya yetkin yok.`)

  let id = int.options.getString("id")
  if(isNaN(id)) return reply(`Düzgün id gir.`)
  let linkler = await db.get("linkler")
  let linklerim = linkler.filter(x => x.owner === id).map(x => x.url).join("\n")
    
reply(`**Suanki Linklerini Asagida Belirttim**:\n${linklerim ? linklerim : "Linki Bulunmuyor"}`)
	}
};