const mongoose = require('mongoose');

const stories = mongoose.Schema({
    storiesImage: { type: String },
    storiesName: { type: String, unique: true, required: true },
    storiesDescription: { type: String },
})

const stories_data = mongoose.model('stories', stories);

module.exports = stories_data;
