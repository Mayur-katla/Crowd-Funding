const mongoose = require('mongoose');

const news = mongoose.Schema({
    newsImage: { type: String },
    newsName: { type: String, unique: true, required: true },
    newsHeader: { type: String },
    newsDescription: { type: String },
    newsTime: { type: String },
    newsDate: { type: String },
})

const news_data = mongoose.model('news', news);

module.exports = news_data;
