import axios from 'axios';

const API_URL = '/finalround/api/topics/';

// Get all promotions
const getAllTopics = async () => {
	const response = await axios.get(API_URL);
	return response.data.data.topics;
};

// Get promotion
const getTopic = async (topicId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + `/${topicId}`, config);
	return response.data.data.topic;
};

// Delete discussion
const deleteTopic = async (topicId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + `/${topicId}`, config);
	return response.data.data.id;
};

// Create promotion
const createTopic = async (promotionData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, promotionData, config);
	console.log(response.data);
	return response.data.data.topic;
};

// Update promotion
const updateTopic = async (token, promotionData, topicId) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.patch(
		API_URL + `/${topicId}`,
		promotionData,
		config
	);
	return response.data.data.updatedTopic;
};

const topicService = {
	getAllTopics,
	deleteTopic,
	createTopic,
	updateTopic,
	getTopic,
};
export default topicService;
