const Discord = require("discord.js");
module.exports.execute = async (client, message, args) => {
  let executor = message.member

let confirmRooms = "830390751321653276"
let publicRooms = "830390752148062235"
let privRooms = "830390752345456663"
let aloneRooms = "830390752345456663"
let gameRooms = "830390752345456663"

let Voice = message.guild.members.cache.filter(t => t.voice.channel).size;
let Confirm = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === confirmRooms).size;
let Public = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === publicRooms).size;
let Priv = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === privRooms).size;
let Alone = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === aloneRooms).size;
let Game = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === gameRooms).size;
message.channel.send(new Discord.MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
.setDescription(`
\`•\` **Sesli odalardaki toplam üye sayısı :** ${Voice}
\`•\` **Teyit odalarındaki üye sayısı :** ${Confirm}
\`•\` **Public odalardaki üye sayısı :** ${Public}
\`•\` **Oyun odalarındaki üye sayısı :** ${Game}
\`•\` **Secret odalardaki üye sayısı :** ${Priv}
\`•\` **Alone odalardaki üye sayısı :** ${Alone}
`))
}
module.exports.configuration = {
  name: "ses",
  aliases: ["ses-say"],
  usage: "!ses",
  description: "Belirtilen miktar kadar komutun kullanıldığı kanalı yavaşlatır."
};