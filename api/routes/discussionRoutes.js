const express = require('express');
const {
	createDiscussion,
	getAllDiscussions,
	updateDiscussion,
	deleteDiscussion,
	getDiscussionById,
} = require('../controllers/discussionController');
const { protect } = require('../middleware/accountMiddleware');
const router = express.Router();

router.route('/').get(getAllDiscussions);
router.route('/').post(createDiscussion);

router
	.route('/:discussionId')
	.get(getDiscussionById)
	.patch(updateDiscussion)
	.delete(deleteDiscussion);

module.exports = router;
