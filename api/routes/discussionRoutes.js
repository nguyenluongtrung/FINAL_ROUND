const express = require('express');
const {
	createDiscussion,
	getAllDiscussions,
	updateDiscussion,
	deleteDiscussion,
	getDiscussionById,
	getAllDiscussionsByPopular,
	reactHeart,
} = require('../controllers/discussionController');
const { protect } = require('../middleware/accountMiddleware');
const router = express.Router();

router.route('/').get(getAllDiscussions).post(createDiscussion);
router.route('/popular').get(getAllDiscussionsByPopular);

router.route('/:discussionId/:accountId').patch(reactHeart);

router
	.route('/:discussionId')
	.get(getDiscussionById)
	.patch(updateDiscussion)
	.delete(deleteDiscussion);

module.exports = router;
