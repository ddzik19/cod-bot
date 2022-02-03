/*
    Author: Damian Dzik
    Date: 03/02/2022

    Desc: Embed with all viable vanguard guns
*/
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: "vg",
    execute(msg) {
        const newEmbed = new MessageEmbed()
            .setColor('FFFB00')
            .setDescription("To find the build of choice type in !build.gunName (!build.kar98kvg)")
            .setTitle("Viable VG guns")
            .addFields({
                name: "kar98kvg",
                value: "SR",
                inline: true
            }, );

        // creating the embed and sending it to the chat
        msg.channel.send({
            embeds: [newEmbed]
        });
    }
}