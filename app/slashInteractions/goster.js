const {
	SlashCommandBuilder,
  EmbedBuilder
} = require('discord.js');
const { QuickDB } = require("quick.db")
const db = new QuickDB()
const ayarlar = require("../ayarlar.json")

module.exports = {
	name: "liste",
	command: new SlashCommandBuilder().setName("liste").setDescription("Linklerinizi görüntüler"),
	async run(client, int, reply) {

  let linkler = await db.get("linkler")
  let linklerim = linkler.filter(x => x.owner === int.user.id).map(x => x.url).join("\n") ? linkler.filter(x => x.owner === int.user.id).map(x => x.url).join("\n") : "Linkiniz Bulunmuyor"
    
reply(`**Suanki Linklerini Asagida Belirttim**:\n${linklerim}`)
	}
};