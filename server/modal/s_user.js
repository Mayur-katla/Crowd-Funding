const mongoose = require('mongoose');

const s_user_data = mongoose.Schema({
    from: { type: String},
    fullname: { type: String },
    email: { type: String },
    mobileno: { type: String },
    gender: { type: String },
    dob: { type: String },
    resume: { type: String},
})

const s_user = mongoose.model('sideadmin', s_user_data);

module.exports = s_user;
