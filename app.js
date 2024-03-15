const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config(); 


client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Bot Banner
  await client.rest.patch("/users/@me", { body: { banner: "data:image/jpg;base64," + Buffer.from(await (await fetch(process.env.URL)).arrayBuffer()).toString('base64') } });
  // Bot GIF profile 
  //await client.rest.patch("/users/@me", { body: { avatar: "data:image/jpg;base64," + Buffer.from(await (await fetch(process.env.URL)).arrayBuffer()).toString('base64') } });
});


client.login(process.env.TOKEN);