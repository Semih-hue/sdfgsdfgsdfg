const Discord = require("discord.js")
const moment = require("moment")
module.exports.execute = async (client, message, args) => {
  let executor = message.member

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**Yetkin yok**`))
  
    let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!üye) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**Üye belirt**`))
  
    let üyekanal = üye.voice.channel
    if(!üyekanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**Belirttiğin kişi ses kanalında bulunmuyor**`))
    let kanal = üye.voice.channel
    
     let mik = üye.voice.selfMute ? "Kapalı Durumda" : "Açık Durumda";
 let kulaklık = üye.voice.selfDeaf ? "Kapalı Durumda" : "Açık Durumda";
let stable;
if(üye.voice.channel === null || üye.voice.channel.id === undefined || üye.voice.channel === undefined) stable = `None!`
    
    message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#fd8f8f")
    .setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${üye} üyesinin bulunduğu ses kanalı -** <#${kanal.id}> \n **Mikrofonu** \`${mik}\` **durumda.**\n **Kulaklığı** \`${kulaklık}\` **durumda.**`)) 
    
    }
    module.exports.configuration = {
      name: "nerde",
      aliases: ["ses-sorgula"],
      usage: "!nerde Seste mi Değil mi Onu Gösterir",
      description: ""
  };
  
  