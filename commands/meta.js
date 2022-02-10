/*
    Author: Damian Dzik
    Date: 06/02/2022

    Desc: Embed with all viable mw guns
*/
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: "meta",
    execute(msg) {
        const newEmbed = new MessageEmbed()
            .setColor('83FF00')
            .setDescription("To find the build of choice type in !build.gunName (!build.kar98kmw)")
            .setTitle("Meta Guns in Warzone")
            .addFields({
                name: "kar98kmw",
                value: "MR",
                inline: true
            }, {
                name: "mp40",
                value: "SMG",
                inline: true
            }, {
                name: "bren",
                value: "LMG",
                inline: true
            }, {
                name: "stg44",
                value: "AR",
                inline: true
            }, {
                name: "ppsh41vg",
                value: "SMG",
                inline: true
            }, {
                name: "coopercarabine",
                value: "AR",
                inline: true
            }, );

        // creating the embed and sending it to the chat
        msg.channel.send({
            embeds: [newEmbed]
        });
    }
}