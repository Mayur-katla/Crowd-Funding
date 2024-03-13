const mongoose = require('mongoose');

const payment = mongoose.Schema({
    fundraisername: {type: String},
    amount: { type: Number},
    fullname: { type: String, unique: true, required: true},
    email: { type: String },
    mobileno: { type: String },
    address: { type: String },
    pancard: { type: String },
})

const payment_data = mongoose.model('payment', payment);

module.exports = payment_data;
