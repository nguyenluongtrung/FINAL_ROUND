import axios from 'axios';

const API_URL = '/finalround/api/discussions';

// Get all promotions
const getAllDiscussions = async () => {
	const response = await axios.get(API_URL);
	return response.data.data.discussions;
};

// Get promotion
const getDiscussion = async (promotionId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + `/${promotionId}`, config);
	return response.data.data.discussion;
};

// Delete discussion
const deleteDiscussion = async (promotionId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + `/${promotionId}`, config);
	return response.data.data.id;
};

// Create promotion
const createDiscussion = async (promotionData, token) => {
	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// };

	const response = await axios.post(API_URL, promotionData);
	console.log(response.data);
	return response.data.data.discussion;
};

// Update promotion
const updateDiscussion = async (token, promotionData, promotionId) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.patch(
		API_URL + `/${promotionId}`,
		promotionData,
		config
	);
	return response.data.data.updatedDiscussion;
};

const promotionService = {
	getAllDiscussions,
	deleteDiscussion,
	createDiscussion,
	updateDiscussion,
	getDiscussion,
};
export default promotionService;
