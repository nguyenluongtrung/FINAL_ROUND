const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
	{
title:{
    type: String,
    required: true,
},
blogerName:{
    type: String,
    required: true,
},
blogContent:{
    type: String,
    required: true,
},
Reference:{
    type: String,
},
image:{
    type: String,
     
},
categories:{
    type: String,
    enum: ['FPT', 'Bán dẫn', 'Trí tuệ nhân tạo (AI)', 'Chuyển đổi số', 'Môi trường xanh','Xe điện'],
     
}
    },
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Blog', blogSchema);
