const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ayar = require("../settings.json");
module.exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(ayar.conf).setColor("RANDOM").setTimestamp();
	if(message.author.id !== "801053851728740403")   
   return message.channel.send("**Bu komutu sadece <@801053851728740403> kullanabilir.**");

    if (!args[0] || isNaN(args[0])) return message.channel.send(embed.setDescription("**Geçerli bir kullanıcı ID'si girmelisin.**")).then(x => x.delete({timeout: 5000}));
  let victim = await client.users.fetch(args[0]);
  if (victim) {
    message.guild.members.unban(victim.id).catch(err => message.channel.send(embed.setDescription("**Belirtilen ID numarasına sahip bir ban bulunamadı!**")).then(x => x.delete({timeout: 5000})));
    message.channel.send(embed.setDescription(`**Belirtilen üyenin yasaklaması başarılı bir şekilde kaldırıldı!**`));
    let ban = db.get("ban") || [];
    if (ban.some(yasak => yasak.id === victim.id)) db.set("ban", ban.filter(x => x.id !== victim.id));
    if(ayar.banLogKanali && client.channels.cache.has(ayar.banLogKanali)) client.channels.cache.get(ayar.banLogKanali).send(embed.setDescription(`**${victim} (\`${victim.id}\`) adlı üyenin banı ${message.author} tarafından kaldırıldı.**`));
  } else {
    message.channel.send(embed.setDescription("**Geçerli bir kullanıcı ID'si girmelisin.**")).then(x => x.delete({timeout: 5000}));
  };
};
module.exports.configuration = {
  name: "açılmazbankaldır",
  aliases: ["açılmaz-ban-kaldır"],
  usage: "",
  description: "."
};