const mongoose = require('mongoose');

const admin = mongoose.Schema({
    username: { type: String},
    password: { type: String},
})

const admin_data = mongoose.model('admin', admin);
module.exports = admin_data;