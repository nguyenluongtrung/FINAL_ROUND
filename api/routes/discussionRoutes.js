const express = require('express');
const { createDiscussion,
    getAllDiscussion,
    updateDiscussion,
    deleteDiscussion,
    getDiscussionById } = require('../controllers/discussionController');
const { protect } = require('../middleware/accountMiddleware');
const router = express.Router();


router.route('/').get(getAllDiscussion);
router.route('/post')
    .post(protect, createDiscussion)

router.route('/post/:discussionId')
    .get(getDiscussionById)
    .patch(protect, updateDiscussion)
    .delete(protect, deleteDiscussion)




module.exports = router;
