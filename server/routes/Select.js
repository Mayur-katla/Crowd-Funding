const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const fundraiser_data = require('../modal/fundraiser');
const user_data = require('../modal/user');
const news_data = require("../modal/news");
const ngo_data = require("../modal/ngo");
const payment_data = require("../modal/payment");
const contact_data = require('../modal/contact');
const stories_data = require('../modal/stories');

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

router.get('/news', async (req, res) => {
    try {
        const newsData = await news_data.find();
        res.json(newsData);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: err });
    }
})

router.get('/stories', async (req, res) => {
    try {
        const storiesData = await stories_data.find();
        res.json(storiesData);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: err });
    }
})

router.get('/contact', async (req, res) => {
    try {
        const contactData = await contact_data.find();
        res.json(contactData);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: err });
    }
})

router.get('/ngo', async (req, res) => {
    try {
        const ngoData = await ngo_data.find();
        const data = res.json(ngoData);
    } catch (error) {
        console.log(error);
    }
})

router.get('/payment', async (req, res) => {
    try {
        const paymentData = await payment_data.find();
        const data = res.json(paymentData);
    } catch (error) {
        console.log(error);
    }
})

router.get('/users', async (req, res) => {
    try {
        const userData = await user_data.find();
        const data = res.json(userData);
    } catch (error) {
        console.log(error);
    }
})

router.get('/fundraiser', async (req, res) => {
    try {
        const fundraiserData = await fundraiser_data.find();
        const data = res.json(fundraiserData);
    } catch (error) {
        console.log(error);
    }
})

router.get('/totalNews', async (req, res) => {
    try {
        const totalNewsData = await news_data.countDocuments();
        const data = res.json(totalNewsData);
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
})

router.get('/totalFundraiser', async (req, res) => {
    try {
        const totalFundraiserData = await fundraiser_data.countDocuments();
        const data = res.json(totalFundraiserData);
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
})

router.get('/totalNgo', async (req, res) => {
    try {
        const totalNgoData = await ngo_data.countDocuments();
        const data = res.json(totalNgoData);
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
})

router.get('/totalUser', async (req, res) => {
    try {
        const totalUser = await user_data.countDocuments();
        const data = res.json(totalUser);
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
})

router.get('/onePayment', async (req, res) => {
    try {
        let q1 = {
            'fullname': 'Mayur Katla',
        }
        const onePayment = await payment_data.find(q1);
        console.log(onePayment);
    } catch (error) {
        console.log(error);
    }
})

router.get('/totalDonation/:name', async (req, res) => {
    try {
        let name = req.params.name;
        let options = {
            allowDiskUse: true
        };
        let pipeline = [
            {
                "$match": {
                    "fundraisername": name,
                }
            },
            {
                "$group": {
                    "_id": {},
                    "total": {
                        "$sum": "$amount"
                    }
                }
            },
            {
                "$project": {
                    "total": "$total",
                    "_id": 0
                }
            }
        ];
        const totalDonation = await payment_data.aggregate(pipeline, options);
        res.json(totalDonation);
        // console.log(totalDonation);
    } catch (error) {
        console.log(error);
    }
})

router.get("/totalFundRaiser/:name", async (req, res) => {
    try {
        let name = req.params.name;
        const query = {
            "fullName": name,
        };

        const projection = {
            "fundRaise": "$fundRaise",
            "_id": 0
        };

        const totalFund = await fundraiser_data.findOne(query).select(projection);
        res.json(totalFund);
    } catch (err) {
        console.log(err);
    }
})


router.get("/DonatorCount/:name", async (req, res) => {
    try {
        let name = req.params.name;
        let options = {
            allowDiskUse: true
        };
        let pipeline = [
            {
                "$match": {
                    "fundraisername": name
                }
            }, 
            {
                "$group": {
                    "_id": {},
                    "count": {
                        "$sum": 1
                    }
                }
            }, 
            {
                "$project": {
                    "count": "$count",
                    "_id": 0
                }
            }
        ];
        const countDonator = await payment_data.aggregate(pipeline, options);
        res.json(countDonator);
    } catch (err) {
        console.log(err);
    }
})

router.get("/oneFundraiser/:name", async (req, res) => {
    try {
        let name = req.params.name;
        var query = {
            "fullName": name,
        };

        const oneFund = await fundraiser_data.find(query);
        res.json(oneFund);
    } catch (error) {
        console.log(error);
    }
})

router.get("/fundContributor/:name", async (req, res) => {
    try {
        let name = req.params.name;
        let query = {
            "fundraisername": name
        };

        let projection = {
            "fullname": "$fullname",
            "amount": "$amount",
            "_id": 0
        };

        const Contributor = await payment_data.find(query).select(projection);
        res.json(Contributor);
    } catch (err) {
        console.log(err);
    }
})

router.get("/newsDescription/:name", async (req, res) => {
    try {
        let name = req.params.name;
        var query = {
            "newsName": name,
        };

        var projection = {
            "newsImage": "$newsImage",
            "newsName": "$newsName",
            "newsHeader": "$newsHeader",
            "newsDescription": "$newsDescription",
            "_id": 0
        };

        const description = await news_data.find(query).select(projection);
        res.json(description);
    } catch (err) {
        console.log(err);
    }
})

router.get("/storiesDescription/:name", async (req, res) => {
    try {
        let name = req.params.name;
        var query = {
            "storiesName": name,
        };

        var projection = {
            "storiesImage": "$storiesImage",
            "storiesName": "$storiesName",
            "storiesDescription": "$storiesDescription",
            "_id": 0
        };

        const description = await stories_data.find(query).select(projection);
        res.json(description);
    } catch (err) {
        console.log(err);
    }
})

router.get("/catFund/:name", async (req, res) => {
    try {
        let name = req.params.name;
        var query = {
            "catFund": name,
        };

        const category = await fundraiser_data.find(query);
        res.json(category);
    } catch (error) {
        console.log(error);
    }
})

router.get('/allDonation', async (req, res) => {
    try {
        let options = {
            allowDiskUse: true
        };
        let pipeline = [
            {
                "$group": {
                    "_id": {},
                    "totalDonation": {
                        "$sum": "$amount"
                    }
                }
            },
            {
                "$project": {
                    "totalDonation": "$totalDonation",
                    "_id": 0
                }
            }
        ];
        const allDonation = await payment_data.aggregate(pipeline, options);
        res.json(allDonation);
        // console.log(totalDonation);
    } catch (error) {
        console.log(error);
    }
})

router.get('/allCount', async (req, res) => {
    try {
        let options = {
            allowDiskUse: true
        };
        let pipeline = [
            {
                "$group": {
                    "_id": {},
                    "count(fullname)": {
                        "$sum": 1
                    }
                }
            },
            {
                "$project": {
                    "count(fullname)": "$count(fullname)",
                    "_id": 0
                }
            }
        ];
        const allDonation = await payment_data.aggregate(pipeline, options);
        res.json(allDonation);
        // console.log(totalDonation);
    } catch (error) {
        console.log(error);
    }
})

router.get("/onePayments/:name", async (req, res) => {
    try {
        let name = req.params.name;
        var query = {
            "fundraisername": name,
        };

        const onePayments = await payment_data.find(query);
        res.json(onePayments);
    } catch (error) {
        console.log(error);
    }
})

// router.get("newsValidation", async (req, res) => {
//     try {
//         const uniqueNews = await news_data.fundOne({ newsName });
//         if (uniqueNews) {
//             return res.status(400).json({ error: "News Name already exists" });
//         }
//     } catch (error) {

//         console.log(error);
//     }
// })


module.exports = router;