const asyncHandler = require('express-async-handler');
const Topic = require('./../models/topicModel');

const createTopic = asyncHandler(async (req, res) => {
	try {
		const topic = await Topic.create(req.body);
		res.status(201).json({
			success: true,
			data: { topic },
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
});

const getAllTopics = asyncHandler(async (req, res) => {
	const topics = await Topic.find({});

	res.status(200).json({
		status: 'success',
		data: {
			topics,
		},
	});
});

const getTopicById = asyncHandler(async (req, res) => {
	try {
		const topic = await Topic.findById(req.params.topicId);
		if (!topic) {
			return res.status(404).json({
				success: false,
				error: 'Topic not found',
			});
		}
		res.status(200).json({
			success: true,
			data: topic,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
});

const updateTopic = asyncHandler(async (req, res) => {
	try {
		const findTopic = await Topic.findById(req.params.topicId);

		if (!findTopic) {
			return res.status(404).json({
				success: false,
				error: 'Topic not found',
			});
		}

		const updatedTopic = await Topic.findByIdAndUpdate(
			req.params.topicId,
			req.body,
			{ new: true }
		);
		res.status(200).json({
			success: true,
			data: { updatedTopic },
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
});

const deleteTopic = asyncHandler(async (req, res) => {
	try {
		const topic = await Topic.findByIdAndDelete(req.params.topicId);
		if (!topic) {
			return res.status(404).json({
				success: false,
				error: 'Topic not found',
			});
		}
		res.status(200).json({
			success: true,
			data: {
				id: req.params.topicId,
			},
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
});
module.exports = {
	createTopic,
	getAllTopics,
	updateTopic,
	deleteTopic,
	getTopicById,
};
