const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');
const Account = require('../models/accountModel');
const sendMail = require('../config/emailConfig');
const emailTemplate = require('../utils/sampleEmailForm');

const getAllBlogs = asyncHandler(async (req, res) => {
	const blogs = await Blog.find({});
	res.status(200).json({
		status: 'success',
		data: {
			blogs,
		},
	});
});

const getBlog = asyncHandler(async (req, res) => {
	const blog = await Blog.findById(req.params.blogId);

	if (!blog) {
		res.status(404);
		throw new Error('Blog not found!');
	}

	res.status(200).json({
		status: 'success',
		data: {
			blog,
		},
	});
});

const updateBlog = asyncHandler(async (req, res) => {
	const oldBlog = await Blog.findById(req.params.blogId);

	if (!oldBlog) {
		res.status(404);
		throw new Error('Blog not found!');
	}

	const updatedBlog = await Blog.findByIdAndUpdate(req.params.blogId, req.body, { new: true });

	res.status(200).json({
		status: 'success',
		data: {
			updatedBlog,
		},
	});
});

const deleteBlog = asyncHandler(async (req, res) => {
	const oldBlog = await Blog.findById(req.params.blogId);

	if (!oldBlog) {
		res.status(404);
		throw new Error('Blog not found!');
	}

	await Blog.findByIdAndDelete(req.params.blogId);

	res.status(200).json({
		status: 'success',
		data: {
			oldBlog,
		},
	});
});

const createBlog = async (req, res) => {
	try {
		const newBlog = await Blog.create(req.body);

		const accounts = await Account.find({});

		for (let account of accounts) {
			if (account.role !== 'Admin') {
				console.log('Sending email to:', account.email);
				let email = {
					toEmail: account.email,
					subject: 'MỘT BLOG MỚI VỀ CHỦ ĐỀ MÀ BẠN ĐANG QUAN TÂM',
					header: 'Antidee có một blog mới ',
					imageUrl: 'https://th.bing.com/th/id/OIP.AOOggO1oyMtCTD6Ep2MdhgHaEo?rs=1&pid=ImgDetMain',
					mainContent: `
						<p>Xin chào <span style="font-weight: bold">${account?.email}</span> Có một blog mới về đề tài mà bạn đang quan tâm. hy vọng bạn sẽ thích</p> 
						<p>Hãy truy cập ngay vào trang web của chúng tôi để để theo dõi những blog mới!</p>
						<p>Trân trọng,</p>
						<p>Antidee Team</p>
					`,
				};
				await sendMail(emailTemplate(email));
			}
		}

		res.status(201).json({
			success: true,
			data: newBlog,
		});
	} catch (error) {
		console.error('Error creating blog or sending emails:', error);
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

module.exports = {
	getAllBlogs,
	getBlog,
	updateBlog,
	deleteBlog,
	createBlog,
};
