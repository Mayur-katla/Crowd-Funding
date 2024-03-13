const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const user = require('../modal/user');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user_data = require('../modal/user');
const s_user_data = require('../modal/s_user');
const admin_data = require('../modal/admin');
const multer = require('multer');
const nodemailer = require('nodemailer');

mongoose.connect('mongodb://127.0.0.1:27017/crowdfunding');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + ' -- ' + file.originalname);
    }
})

const upload = multer({ storage: storage });

// User panel Authentication

router.post('/user_signup', async (req, res) => {
    try {
        // const { fullname, email, mobileno, gender, dob } = req.body;
        const testpassword = await bcrypt.hash(req.body.password, 10);
        let link = "";
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'YOUR EMAIL ADDRESS',
                pass: 'YOUR EMAIL PASSWORD',
            },
            tls: {
                rejectUnauthorized: false,
            }
        })
        if (req.body.fundType === "Fundraiser") {
            link = "<a href='http://localhost:3000/Login' style='background-color: blue; color: white; padding: 9px 15px; border-radius: 5px;text-decoration: none; text-transform: uppercase;'>Login</a>"
        } else if (req.body.fundType === "NGO") {
            link = "<a href='http://localhost:3000/NGOLogin' style='background-color: blue; color: white; padding: 9px 15px; border-radius: 5px;text-decoration: none; text-transform: uppercase;'>Login</a>"
        }
        const mailOptions = ({
            from: '"Crowdfunding" <YOUR EMAIL>',
            to: req.body.email,
            subject: "Thank You for Registering in Crowdfunding...",
            html: `
            <h1><b>Thank You ${req.body.fullname} For Registering for Crowdfunding community</b></h1>
            <p>Link Here - ${link}</p>
            `,
        });

        const userData = await user_data.create({
            fundType: req.body.fundType,
            fullname: req.body.fullname,
            email: req.body.email,
            password: testpassword,
            mobileno: req.body.mobileno,
        });
        console.log(userData);
        res.json({ success: 'ok', message: userData });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json({ status: 'error', message: error });
            }
            res.json({ status: 'ok', message: "Email Sent to " + info.response, db: "Data => " + userData });
        })
    } catch (err) {
        console.log(err);
        res.json({ success: 'error', message: err })
    }
})

router.post('/user_login', async (req, res) => {
    const userData = await user_data.findOne({ email: req.body.email});
    const testpassword = await bcrypt.compare(req.body.password, userData.password);

    if (!testpassword) {
        return res.json({ success: 'ok', userData: true });
    } else {
        return res.json({ success: 'error', userData: false })
    }
})



// Side Admin Panel Authentication

router.post('/s_admin_signup', upload.single("fileresume"), async (req, res) => {
    // let resume = req.file.filename;
    try {
        const { fullname, email, mobileno, gender, dob } = req.body;
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'Right your email address...@gmail.com',
                pass: 'EMAIL PASSWORD'
            },
            tls: {
                rejectUnauthorized: false,
            }
        })
        const mailOptions = ({
            from: '"Crowdfunding" <Right your email address...@gmail.com>',
            to: email,
            subject: "Applying for Crowdfunding Community",
            html: `<h1><b>Thank You ${fullname} For Registering for Crowdfunding community</b></h1>
                
                <p>You get Username and password from the Crowdfunding Admin</p>`,
        });

        const side_userDB = await s_user_data.create({
            from: '"Crowdfunding" <Right your email address...@gmail.com>',
            fullname: fullname,
            email: email,
            mobileno: mobileno,
            gender: gender,
            dob: dob,
            resume: req.file.path
        });
        console.log(side_userDB);
        res.json({ success: 'ok', message: side_userDB });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json({ status: 'error', message: error });
            }
            res.json({ status: 'ok', message: "Email Sent to " + info.response, db: "Data => " + side_userDB });
        })
    } catch (err) {
        console.log(err);
        res.json({ success: 'error', message: err })
    }
})

// Admin panel authentication 

router.post('/admin_login', async (req, res) => {
    const admin_login = await admin_data.findOne({ email: req.body.email, password: req.body.password });
    if (admin_login) {
        return res.json({ success: true, l_admin: true });
    } else {
        return res.json({ success: false, l_admin: false });
    }
})

module.exports = router;