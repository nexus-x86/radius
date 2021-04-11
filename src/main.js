//const Discord = require("discord.js");
const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const packageData = require('./config.json');
const TOKEN = packageData.token;
const prefix = packageData.prefix;
const client = new CommandoClient({
  commandPrefix: prefix,
  owner: "752592264231911561",
  invite: "https://discord.gg/FernczgPfd",
});
const Enmap = require("enmap");
client.warnsEnmap = new Enmap({name: "warns"});


client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["fun", "fun commands"],
    ["moderation", "commands for moderators"],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(TOKEN);
