const Discord = require("discord.js");
module.exports.execute = async (client, message, args) => {
    let executor = message.member   

let Tag = "✬" //Tagınız
let BoosterRole =  "831074554880851989"

          var TotalMember = message.guild.memberCount
          var Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          var Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
          var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          var Boost = message.guild.premiumSubscriptionCount;
          const arxEmbed = new Discord.MessageEmbed()
              .setColor('#2F3136')
              .setAuthor(`${message.guild.name}`,message.guild.iconURL())
              .setDescription(`
\`•\` **Sunucumuzdaki Toplam Üye Sayısı :** ${client.emojili(`${TotalMember}`)}
\`•\` **Sunucumuzdaki Aktif Üye Sayısı :** ${client.emojili(`${Online}`)}
\`•\` **Sunucumuzdaki Taglı Üye Sayısı :** ${client.emojili(`${Taglı}`)}
\`•\` **Sunucumuzdaki Sesli Üye Sayısı :** ${client.emojili(`${Voice}`)}
\`•\` **Sunucumuzdaki Takviye Sayısı :** ${client.emojili(`${Boost}`)}
`)
message.channel.send(arxEmbed)

}
module.exports.configuration = {
  name: "say",
    aliases: ["say"],
    usage: "say",
    description: ""
};

