const mongoose = require('mongoose');

const contact = mongoose.Schema({
    contact_name: { type: String },
    contact_email: { type: String },
    contact_description: { type: String },
})

const contact_data = mongoose.model('contact', contact);

module.exports = contact_data;
