import axios from 'axios';

const API_URL = '/finalround/api/blogs/';

// Get all blogs
const getAllBlogs = async () => {
	const response = await axios.get(API_URL); 
	return response.data.data.blogs;
	
};

// Get blog
const getBlog = async (blogId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + `/${blogId}`, config);
	return response.data.data.blog;
};

// Delete blog
const deleteBlog = async (blogId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + `/${blogId}`, config);
	return response.data.data.oldBlog;
};

// Create blog
const createBlog = async (blogData) => {
	const response = await axios.post(API_URL, blogData);
	console.log(blogData);
	return response.data.data.newBlog;
};

// Update blog
const updateBlog = async (blogData, blogId) => {
	

	const response = await axios.patch(
		API_URL + `/${blogId}`,
		blogData,
	);
	console.log(response.data.data.updatedBlog)
	return response.data.data.updatedBlog;
};

const blogService = {
	getAllBlogs,
	deleteBlog,
	createBlog,
	updateBlog,
	getBlog,
};
export default blogService;