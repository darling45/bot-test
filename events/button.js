const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ChannelType, ButtonBuilder, messageLink } = require("discord.js");
const ms = require('ms');
const client = require('..');
const config = require('../config.json');
client.on('interactionCreate', async interaction => {
	if(interaction.customId == 'test-command') {
        interaction.reply({ content: 'Bien joué tu a cliquer sur le premier button du bot ^^' })
    }
    if(interaction.customId == 'menu-command') {
        const row = new ActionRowBuilder()
                .addComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ticket-option')
                        .setPlaceholder('Choix de la category de tickets')
                        .addOptions(
                            {
                                label: `test 1`,
                                description: `Categorie1`,
                                value: 'Option1-ticket',
                            },{
                                label: `test 2`,
                                description: `Categorie2`,
                                value: 'Option2-ticket',
                            },
                        ),
                );
        interaction.reply({ content: 'menu-command', components: [row] })
    }
    if(interaction.isSelectMenu()){
        if(interaction.customId == 'ticket-option') {
            const value = interaction.values[0];
            if(value == 'Option1-ticket') {
                interaction.reply({ content: 'Bien jouer !' })
            }
            if(value == 'Option2-ticket') {
                interaction.reply({ content: 'Super !' })
            }
        }
    }
});