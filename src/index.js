require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.username} is online`);
});

client.on("messageCreate", (message) => {
  //   console.log(message.content);
  if (message.author.bot) return;
  if (message.content === "hi") {
    message.reply(`hi ${message.author.globalName} welcome to DebLok`);
  }
});

client.login(process.env.TOKEN);
