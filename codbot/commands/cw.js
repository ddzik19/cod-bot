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
            .setColor(red)
            .setDescription("To find the build of choice type in gunName.build")
            .setTitle("Viable CW guns")
            .addFields({
                name: "ots9"
            }, {
                name: "mp5",
                value: "Blueprint iron sight"
            }, {
                name: "ak74u"
            }, {
                name: "mac"
            }, {
                name: "bullfrog"
            }, {
                name: "lapa"
            }, {
                name: "ak47"
            }, {
                name: "fara83"
            }, {
                name: "c58"
            }, {
                name: "em2"
            }, {
                name: "xm4"
            }, {
                name: "qbz83"
            }, {
                name: "streetsweeper"
            }, {
                name: "gallo"
            }, {
                name: "m82"
            }, {
                name: "stoner63"
            }, {
                name: "carv2"
            }, {
                name: "m16"
            }, {
                name: "swiss"
            }, {
                name: "diamatti"
            }, {
                name: "amp62"
            })

        // creating the embed and sending it to the chat
        msg.channel.send({
            embeds: [newEmbed]
        })
    }
}