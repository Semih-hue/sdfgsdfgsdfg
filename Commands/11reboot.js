const Discord = require('discord.js');

module.exports.execute = async (client, message, args) => {
	if(message.author.id !== "801053851728740403")
  return message.channel.send('**Bu komutu sadece <@801053851728740403> kullanabilir.**')

	
	if (args[0] == 'mod') {
	message.channel.send(`**Moderasyon botuna ${message.author} (**\`${message.author.id}\`**) tarafından restart atıldı.**`)

 message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`Bot yeniden başlatılıyor...`);

    process.exit(0);
    
  })
};
}

module.exports.configuration = {
    name: "r",
    aliases: ["restart"],
    usage: "",
    description: ""
};
