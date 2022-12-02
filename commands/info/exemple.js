const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
	name: 'exemple',
	description: "Get the bot's invite link",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
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
        message.channel.send({ embeds: [embed], components: [row] });
}
}
