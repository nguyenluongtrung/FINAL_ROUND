const express = require('express');
const { createDiscussion, getAllDiscussion, updateDiscussion, deleteDiscussion } = require('../controllers/discussionController');
const { protect } = require('../middleware/accountMiddleware');
const router = express.Router();


router.route('/').get(getAllDiscussion);
router.route('/post')
.post(protect, createDiscussion)

router.route('/post/:discussionId')
.patch(protect, updateDiscussion)
.delete(protect, deleteDiscussion)



module.exports = router;
