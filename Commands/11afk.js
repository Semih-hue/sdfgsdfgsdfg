const Discord = require("discord.js");
const db = require("quick.db");

module.exports.execute = async (client, message, args) => {
let executor = message.member
  
  const reawen = db.fetch(`afkid_${message.author.id}_${message.guild.id}`)
  if (reawen) return;
  const sebep = args[0] ? args.join(" ").replace(new RegExp("@everyone", "g"), "everyone").replace(new RegExp("@here", "g"), "here") : "Sebep Belirtilmedi!";
  const b = message.member.displayName
  await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep)
  await db.set(`afkid_${message.author.id}_${message.guild.id}`, message.author.id)
  await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b)
  await db.set(`afk_süre_${message.author.id}_${message.guild.id}`, Date.now())
  message.channel.send(`\`•\` ${message.author} **başarılı bir şekilde AFK oldunuz**\n\`•\` **Sebep :** \`${sebep}\``);
  message.member.setNickname("[AFK] " + b)
}

module.exports.configuration = {
    name: "afk",
    aliases: ["afk"],
    usage: "afk",
    description: ""
};