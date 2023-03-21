const { EmbedBuilder, Collection, ButtonBuilder, Client, Partials, ActivityType } = require("discord.js")
const client = new Client({
  intents: 3276799,
  partials: [Partials.Channel, Partials.Message]
})
client.login(process.env.token)
const { QuickDB } = require("quick.db")
const db = new QuickDB()
const fetch = require("node-fetch")
const axios = require("axios")
const express = require("express");
const app = express();
const { readdirSync } = require("fs")
const {
	REST
} = require('@discordjs/rest');
const {
	Routes
} = require('discord-api-types/v10');
const ayarlar = require("./ayarlar.json")

app.get("/", (request, response) => {
  response.send(`Bot Aktif | Discord:  | İletişim Veya Uptime Etmek İçin Discordumuza Gelebilirsiniz.`)
});

setInterval(async() => {
  var links = await db.get("linkler");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
     fetch(link).catch(x => console.log(x))
  });
}, 60000);


// Slash Etkileşimleri
client.slashInteractions = new Collection();
let globalSlashCommands = [];
readdirSync("./slashInteractions/").forEach(f => {
	let cmd = require(`./slashInteractions/${f}`);
	client.slashInteractions.set(cmd.name, cmd);
	globalSlashCommands.push(cmd.command);
});

let rest = new REST({
	version: '10'
}).setToken(client.token);

client.on("ready", async () => {
	try {

		await rest.put(
			Routes.applicationCommands(client.user.id), {
				body: globalSlashCommands
			},
		);

		console.log(`${client.user.tag} ile giris yapildi.`);
    
   client.user?.setPresence({ activities: [{ name:`Sanal Makine`, type:ActivityType.Playing }], status:"dnd"})
	} catch (error) {
		console.error(error);
	};
});

client.on("interactionCreate", async(int) => {
  if(int.isChatInputCommand()) {
    
    let reply = function(veri) {
      int.reply({embeds:[new EmbedBuilder().setTitle(`Faster Uptime Bot`).setAuthor({name:int.user.tag, iconURL:int.user.displayAvatarURL({dynamic:true})}).setDescription(veri).setFooter({text:`Made By Shiba`})], ephemeral:true})
    }
    
    if(int.everyone) return reply(`dırrrciblidopodp`)
    
    client.slashInteractions.get(int.commandName)?.run(client, int, reply);
  }
})

client.on("messageCreate", async(message) => {
  
  if(message.channel.type !== "DM") return
  if(!message.content) return
  
client.channels.cache.get(ayarlar.log).send({embeds:[new EmbedBuilder().setDescription(`${message.content}`).setAuthor({name:message.author.tag, iconURL:message.author.displayAvatarURL({dynamic:true})}).setTimestamp()]})
})