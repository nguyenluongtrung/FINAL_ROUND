const asyncHandler = require('express-async-handler');
const Discussion = require('./../models/discussionModel');


const createDiscussion = asyncHandler(async (req, res) => {
    try {
      const discussion = await Discussion.create(req.body);
      res.status(201).json({
        success: true,
        data: { discussion },
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  });

  const getAllDiscussion = asyncHandler(async(req,res)=>{
    const discussion = await Discussion.find({});

    res.status(200).json({
        status:'success',
        data:{
            discussion
        }
    })
  })

  const getDiscussionById = asyncHandler(async (req, res) => {
	try {
		const discussion = await Discussion.findById(req.params.discussionId);
		if (!discussion) {
			return res.status(404).json({
				success: false,
				error: 'Discussion not found',
			});
		}
		res.status(200).json({
			success: true,
			data: discussion,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
});

  const updateDiscussion = asyncHandler(async(req,res)=>{
    try {
		const findDiscussion = await Discussion.findById(req.params.discussionId);

		if (!findDiscussion) {
			return res.status(404).json({
				success: false,
				error: 'Discussion not found',
			});
		}

		const updatedDiscussion = await Discussion.findByIdAndUpdate(
			req.params.discussionId,
			req.body,
			{ new: true }
		);
		res.status(200).json({
			success: true,
			data: { updatedDiscussion },
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
  })

  const deleteDiscussion = asyncHandler(async(req,res)=>{
    try {
		const discussion = await Discussion.findByIdAndDelete(req.params.discussionId);
		if (!discussion) {
			return res.status(404).json({
				success: false,
				error: 'Discussion not found',
			});
		}
		res.status(200).json({
			success: true,
			data: {
				id: req.params.discussionId,
			},
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
  })
  module.exports = {
	createDiscussion,
    getAllDiscussion,
    updateDiscussion,
    deleteDiscussion,
	getDiscussionById
    
};