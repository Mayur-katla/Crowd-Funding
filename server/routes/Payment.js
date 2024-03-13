const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const payment_data = require('../modal/payment');
const nodemailer = require('nodemailer');

const razorpay = new Razorpay({
    key_id: 'KEY_ID',
    key_secret: 'KEY_SECRET',
})

router.post('/payment/:name', async (req, res) => {
    try {
        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     secure: false,
        //     auth: {
        //         user: 'mayurkatla787@gmail.com',
        //         pass: 'ommqspnpkgnhibuw'
        //     },
        //     tls: {
        //         rejectUnauthorized: false,
        //     }
        // })

        // const mailOptions = ({
        //     from: '"Crowdfunding" <mayurkatla787@gmail.com>',
        //     to: req.body.email,
        //     subject: "Thank You for your Donation",
        //     html: `
        //     <h1><b>Thank You ${req.body.fullname}, For your Contribution to 'SAVE A LIFE'</b></h1>
        //     `,
        // });

        const name = req.params.name;

        const paymentData = await payment_data.create({
            fundraisername: name,
            amount: req.body.amount * 100,
            fullname: req.body.fullname,
            email: req.body.email,
            mobileno: req.body.mobileno,
            address: req.body.address,
            pancard: req.body.pancard,
        })
        const order = await razorpay.orders.create(paymentData);
        res.json(order);
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         res.json({ status: 'error', message: error });
        //     }
        //     res.json({ status: 'ok', message: "Email Sent to " + info.response, db: "Data => " + paymentData });
        // })
        // console.log(order);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: "News Name already exists" })
        }
        console.log(err);
        res.json({ status: 'error', message: err })
    }
})

module.exports = router;