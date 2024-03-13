const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./modal/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/crowdfunding');

app.use('/', require('./routes/Auth'));
app.use('/', require('./routes/Insert'));
app.use('/', require('./routes/Payment'));
app.use('/', require('./routes/Select'));
app.use('/', require('./routes/Delete'));

app.listen(4848, (err) => {
    if (err) throw err;
    console.log('listening on 4848');
})
