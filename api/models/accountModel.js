const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const accountSchema = mongoose.Schema(
	{
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
		name: {
			type: String,
		},
		address: {
			type: String,
		},
		phoneNumber: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
		},
		dob: {
			type: Date,
		},
		gender: {
			type: String,
			enum: ['Nam', 'Nữ', 'Khác'],
			default: 'Nam',
		},
		avatar: {
			type: String,
			default: '',
		},
		password: {
			type: String,
			minLength: [8, 'Account password contains more than 8 characters'],
			select: false,
		},
	},
	{
		timestamps: true,
	}
);

accountSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}

	this.password = await bcrypt.hash(this.password, 12);
	next();
});

accountSchema.methods.comparePasswordInDb = async function (pswd, pswdDB) {
	return await bcrypt.compare(pswd, pswdDB);
};

module.exports = mongoose.model('Account', accountSchema);
