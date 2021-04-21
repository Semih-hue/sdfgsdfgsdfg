const Discord = require("discord.js");
const ayar = require("../settings.json");
module.exports.execute = async (client, message, args) => {
let executor = message.member
let embed = new Discord.MessageEmbed().setColor("#313136").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
if(!message.member.roles.cache.has(ayar.üstYetkili) && !message.member.hasPermission("ADMINISTRATOR")) message.reply("Yeterli Yetkiye Sahip Değilsin")
let kanal = message.guild.channels.cache.get(args[0])
if(!kanal) message.channel.send(embed.setDescription(`Lütfen KanalID Giriniz.`))
kanal.members.filter(a => !a.hasPermission("ADMINISTRATOR")).array().forEach(üyeler => {
  üyeler.voice.setMute(true)
});

message.channel.send(embed.setDescription(`
\`${kanal.name}\` **AllMute İşlemi**

\`•\` **Kanal ID :** \`${kanal.id}\`
\`•\` **Kanal İsim :** \`${kanal.name}\`
\`•\` **Kanal Üye Sayısı :** \`${kanal.members.size}\`
\`•\` **Susturulan Üye Sayısı :** \`${kanal.members.filter(a => !a.hasPermission("ADMINISTRATOR")).size}\`
\`•\` **Susturulmayan Üye Sayısı :** \`${kanal.members.filter(a => a.hasPermission("ADMINISTRATOR")).size}\``))

}
module.exports.configuration = {
    name: "allmute",
    aliases: ["herkesmute", "toplu-vmute", "hereksisustur","hs"],
    usage: "allmute",
    description: ""
};