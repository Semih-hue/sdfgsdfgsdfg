const { MessageEmbed, } = require("discord.js");

module.exports.execute = async (client, message, args) => {
    let executor = message.member
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    if (message.author.id !== "801053851728740403") return;
    let toplantiChannel = "833327046197379152"
    let katıldıRolü = "834367817389572117"
    let enaltyt = message.guild.roles.cache.get('833326897811292200')

    let sestekiler = message.guild.members.cache.filter(x => x.roles.highest.position >= enaltyt.position).filter(s => s.voice.channelID === toplantiChannel)
    let sesteolmayanlar = message.guild.members.cache.filter(x => x.roles.highest.position >= enaltyt.position).filter(s => s.voice.channelID !== toplantiChannel).filter(a => a.roles.cache.has(katıldıRolü))

    sestekiler.array().forEach((uye, index) => {
        setTimeout(async() => {
            uye.roles.add(katıldıRolü)
        }, index * 750)
    })
    sesteolmayanlar.array().forEach((uye, index) => {
        setTimeout(async() => {
            uye.roles.remove(katıldıRolü)
        }, index * 750)
    })
    message.channel.send(embed.setDescription(`
    **Katıldı rolü verilecek yetkili sayısı :** \`${sestekiler.size}\`
    **Katıldı rolü alınacak yetkili sayısı :** \`${sesteolmayanlar.size}\`
    `))
};
module.exports.configuration = {
    name: "katıldı",
    aliases: ["toplantı"],
    usage: "!katıldı",
    description: ""
};
