module.exports = {
	name: 'Sorebird',
	description: 'check if Sorebird is active',
	execute(message, args) {
		message.channel.sendMessage('chirp');
	},
};
