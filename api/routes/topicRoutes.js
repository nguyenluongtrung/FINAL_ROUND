const express = require('express');
const { protect } = require('../middleware/accountMiddleware');
const {
	getAllTopics,
	createTopic,
	getTopicById,
	updateTopic,
	deleteTopic,
} = require('../controllers/topicController');
const router = express.Router();

router.route('/').get(getAllTopics);
router.route('/topic').post(protect, createTopic);

router
	.route('/topic/:topicId')
	.get(getTopicById)
	.patch(protect, updateTopic)
	.delete(protect, deleteTopic);

module.exports = router;
