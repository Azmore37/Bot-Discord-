var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", message => {
  //variables
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = ">";


  bot.on("ready" , () => {
      console.log('Connecté comme ${client.user.tag}!');

  });
  if (message.channel.id === "612988558851964929") {
    if (isNaN(message.content)) {
      message.delete({ timeout: 3000 });
    }
  }
});

bot.login("NjEzMzM5NzEzNDIzNjcxMzI3.XV0m2g.XjO3MASDCtwFoR39tCCBcun0XiY");


