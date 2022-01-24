/*
    Author: Damian Dzik
    Date: 22/01/2022
    Updated: 12/01/2022
*/

// basic setup stuff ---------
const Discord = require("discord.js");
const {
    Client,
    Intents
} = require("discord.js")
const client = new Client({
    restTimeOffset: 0,
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUIDE_MESSAGES]
})
//----------------------------

// creating a file sync reader to read files
const fs = require('fs')

// creating a new collection of commands
client.commands = new Discord.Collection();

// getting all command files 
const commandFiles = fs.readFileSync('./src/commands').filter(file => file.endsWith('.js'));

// looping through files in commands and adding the commands into a collection
for (const file of commandFiles) {
    const command = require(`./src/commands/${file}`)
    client.commands.set(command.name, command);
}

// allowing us to get the token from the .env file
const dotenv = require('dotenv')
dotenv.config();

// when bot is logged in display message
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// commands
// the prefix of each command
const prefix = "wz."
client.on("messageCreate", msg => {
    const args = msg.content.trim.split('.')
    const command = args[0].toLowerCase();

    if (msg.author.bot || !msg.content.startsWith(prefix)) return

    try {
        // listing all the viable cold war weapon builds
        if (command === "wz.cw") {
            client.commands.get(args[1].toLowerCase()).execute(msg)
        }
    } catch (error) {
        console.log(error)
    }
})
client.login(process.env.TOKEN)