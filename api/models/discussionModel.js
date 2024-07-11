const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
		default: '',
	},
	image: {
		type: String,
		default: '',
	},
	accountId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account',
	},
	topics: [
		{
			type: String,
		},
	],
	loveCount: {
		type: Number,
		default: 0,
	},
	loveAccounts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Account',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Discussion', discussionSchema);
