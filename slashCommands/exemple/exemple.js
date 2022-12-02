const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
	name: 'exemple',
	description: "Check bot's ping.",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
        const embed = new EmbedBuilder()
        .setTitle('Exemple')
        .setDescription('Voici un exemple de commande en slashcommands.')
        .setColor('ff0000')
        .setTimestamp()

        const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel('Test')
                    .setStyle('4')
                    .setCustomId('test-command'),
                    new ButtonBuilder()
                    .setLabel('menu')
                    .setStyle('4')
                    .setCustomId('menu-command')
                );      
        interaction.reply({ embeds: [embed], components: [row] });
                            	}
};