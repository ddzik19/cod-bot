/*
    Author: Damian Dzik
    Date: 23/01/2022

    Desc: Embed with all viable cw guns
*/
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: "cw",
    execute(msg) {
        const newEmbed = new MessageEmbed()
            .setColor('DA1717')
            .setDescription("To find the build of choice type in gunName.build")
            .setTitle("Viable CW guns")
            .addFields({
                name: "ots9",
                value: 'SMG',
                inline: true
            }, {
                name: "mp5",
                value: "SMG\nBlueprint iron sight",
                inline: true
            }, {
                name: "ak74u",
                value: 'SMG',
                inline: true
            }, {
                name: "mac",
                value: 'SMG',
                inline: true
            }, {
                name: "bullfrog",
                value: 'SMG',
                inline: true
            }, {
                name: "lapa",
                value: 'SMG',
                inline: true
            }, {
                name: "ak47",
                value: 'AR',
                inline: true
            }, {
                name: "fara83",
                value: 'AR',
                inline: true
            }, {
                name: "c58",
                value: 'AR',
                inline: true
            }, {
                name: "em2",
                value: 'AR',
                inline: true
            }, {
                name: "xm4",
                value: 'AR',
                inline: true
            }, {
                name: "qbz83",
                value: 'AR',
                inline: true
            }, {
                name: "streetsweeper",
                value: 'SHOTGUN',
                inline: true
            }, {
                name: "gallo",
                value: 'SHOTGUN',
                inline: true
            }, {
                name: "m82",
                value: 'LMG',
                inline: true
            }, {
                name: "stoner63",
                value: 'LMG',
                inline: true
            }, {
                name: "carv2",
                value: 'TACTICAL',
                inline: true
            }, {
                name: "m16",
                value: 'TACTICAL',
                inline: true
            }, {
                name: "swiss",
                value: 'SNIPER',
                inline: true
            }, {
                name: "diamatti",
                value: 'PISTOL',
                inline: true
            }, {
                name: "amp62",
                value: 'AUTO PISTOL',
                inline: true
            });

        // creating the embed and sending it to the chat
        msg.channel.send({
            embeds: [newEmbed]
        });
    }
}