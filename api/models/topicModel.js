const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		default: '',
	},
});

module.exports = mongoose.model('Topic', topicSchema);
