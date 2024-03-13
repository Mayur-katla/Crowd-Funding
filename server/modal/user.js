const mongoose = require('mongoose');

const user = mongoose.Schema({
    fundType: { type: String},
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    mobileno: { type: String },
})

const user_data = mongoose.model('user', user);
module.exports = user_data;