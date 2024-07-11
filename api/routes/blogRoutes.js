const express = require('express');
const {
	getAllBlogs,
	createBlog,
	updateBlog,
	deleteBlog,
	getBlog,
} = require('../controllers/blogController');
const { protect, restrict } = require('../middleware/accountMiddleware');
const router = express.Router();

router
	.route('/')
	.get(getAllBlogs)
	.post( createBlog);
router
	.route('/:blogId')
	.get( getBlog)
	.patch( updateBlog)
	.delete(  deleteBlog);

module.exports = router;