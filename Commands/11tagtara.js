const { MessageEmbed } = require("discord.js");
const ayar = require("../settings.json");
module.exports.execute = async (client, message, args) => {
    let executor = message.member
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**Yetkin yok!**')
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setFooter(``)
    let tag = "✬"
    let tagrol = "833326919717355570"

    let taglılar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(tagrol))
    let tagsızlar = message.guild.members.cache.filter(s => !s.user.username.includes(tag) && s.roles.cache.has(tagrol))

    taglılar.array().forEach((cross, index) => {
        setTimeout(async() => {
            cross.roles.add(tagrol)
        }, index * 1000)

    })
    tagsızlar.array().forEach((cross, index) => {
        setTimeout(async() => {
            cross.roles.remove(tagrol)
        }, index * 1000)
    })
    message.channel.send(embed.setDescription(`\`${taglılar.size}\` **Kullanıcıya taglı rolü verilecek.**\n\`${tagsızlar.size}\` **Kullanıcıdan taglı rolü alınacak.**`))

}
module.exports.configuration = {
    name: "tagtara",
    aliases: ["tag-kontrol", "tag-tara"],
    usage: "tagtara kontrol",
    description: ""
};
