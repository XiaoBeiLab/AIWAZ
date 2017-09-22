const Discord = require('discord.js');  //for embed
const version = require('../package.json').version; //for embed
exports.run = (client, message, args) => {
  message.delete();

//permission module
  let guild = message.guild;  //define Guild
  let me = message.author;    //define me (message sender)
  let permission = guild.member(me).permissions.has("ADMINISTRATOR");   //check the user rither or not have the permission

/*
Logic gate of the user permission
  if the sender isn't the user you want (true), and if the user didn't have the permission (true), then send a message and end the command.
  if the sender is the user you want(false), and if the user have the permission (ignore), then do the command.
  if the sender is the user you want(false), and if the user didn't have the permission (ignore), then do the command.
  if the sender isn't the user you want(true), and if the user gave the permission (false), then do the command.
*/
  if (message.author.id != "179443176279375872") {
    if (!permission) {
      message.channel.send("You Don't Have The Permission To Use It.").then(response => response.delete(2000));
      return;
    }
  }

  let d = client.readyAt;                  //The time when the bot is ready. (Online)
  let n = d.toLocaleString();              //Conver the date format to your locale string.
  let ut = client.uptime;                  //The bot total up time.
  let time = Math.ceil((ut / 1000) / 60);  //Conver the up time to Minute(s).
  let unit;                                //The time unit. (Minutes and Hours)

//Logic Gate for changing the Minute to Hour If the time pass 60 Minutes.
  if (time >= '60') {
    time = Math.ceil(((ut / 1000) / 60) / 60);
    unit = 'Hour(s)';
  } else {
    unit = 'Minute(s)';
  }

//SUM the result and send it
  let embed = new Discord.RichEmbed()
      .setAuthor("🔷(-AIwaz Status Manual-)🔷")
      .setColor("#33ccff")
      .setDescription("Start At :" +'\`'+ n +'\`')
      .addField("Up Time", "Up Time : " + '\`' + time + '\`' + unit, true)
      .addField("Ping", '\`' + Math.ceil(client.ping) + '\`' + "ms", true)
      .setThumbnail("https://i.imgur.com/Fta2jMg.jpg")
      .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
      message.channel.send({embed});
}
