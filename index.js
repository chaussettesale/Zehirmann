const Discord = require('discord.js')

 const bot = new Discord.Client()

 bot.on("ready", function () {
   bot.user.setActivity("Caravan War");
   console.log("Je suis connecté !");
 });





      bot.on('message', message => {
                            if (message.content === '!chanteZ') {
                            message.channel.send('Un regard incendiaire et tout est calciné !\nEmbrassez cette terre avant de l\'embraser…\nPar le feu de nos êtres, nous irons purifier \nNos ennemis, nos frères, qui nous ont contrariés…')
                            }
                          })
      bot.on('message', message => {
                            if (message.content === '!helpz') {
                            message.channel.send(' Pour me controler il faut taper l\'une des commandes suivantes:\n\n **__Catégorie Stratégie:__**\n\n**__Catégorie Fun:__**\n\n**__Catégorie RDA:__**\n\n ```!chanteZ ``` ')
                             }
                             })

 bot.login('NDIxNTk0NjE0NTEyODc3NTY4.DYPpBA.nN8M55cjp0FdErDkZ6Rj2FVuZnQ')
