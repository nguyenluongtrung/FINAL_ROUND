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
	likeCount: {
		type: Number,
		default: 0,
	},
	dislikeCount: {
		type: Number,
		default: 0,
	},
	likeAccounts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Account',
		},
	],
	dislikeAccounts: [
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
