const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const news_data = require('../modal/news');
const fundraiser_data = require('../modal/fundraiser');
const ngo_data = require('../modal/ngo');
const contact_data = require('../modal/contact');
const stories_data = require('../modal/stories');

// mongoose.connect("mongodb://localhost:27017/crowdfunding");

router.use('/upload', express.static(path.join(__dirname, 'uploads')));

const file_news = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../user/public/uploads/News/');
        // cb(null, '../admin/public/uploads/News/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    }
})

const file_stories = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../user/public/uploads/Stories/');
        // cb(null, '../admin/public/uploads/Stories/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    }
})

const fund_image = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../user/public/uploads/Image/');
        // cb(null, '../admin/public/uploads/Image/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    }
})

// const fund_documents = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'upload/Documents/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '--' + file.originalname);
//     }
// })

const upload_news = multer({ storage: file_news });
const upload_fund_image = multer({ storage: fund_image });
const upload_success_stories = multer({ storage: file_stories });

// const upload_fund_documents = multer({ storage: fund_documents });

router.post("/add_fundraiser", upload_fund_image.single("fundImage"), async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({ status: "No file Uploaded" });
        }

        const fundraiserData = await fundraiser_data.create({
            catFund: req.body.catFund,
            fundRaise: req.body.fundRaise,
            patientRelative: req.body.patientRelative,
            educationQualification: req.body.educationQualification,
            employeeStatus: req.body.employeeStatus,
            fullName: req.body.fullName,
            patientAge: req.body.patientAge,
            medicalCondition: req.body.medicalCondition,
            hospitalName: req.body.hospitalName,
            emailAddress: req.body.emailAddress,
            fundImage: req.file.path,
            // fundDocuments: req.file.path,
            patientDescription: req.body.patientDescription,
        })

        console.log(fundraiserData);
        res.json({ status: 'ok', data: fundraiserData });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: "Fundraiser Name already exists" })
        }
        console.log(err);
        res.json({ status: 'error', message: err });
    }

})


router.post("/add_ngo", async (req, res) => {
    try {
        const ngoData = await ngo_data.create({
            registeredNonProfit: req.body.registeredNonProfit,
            orgName: req.body.orgName,
            registeredAddress: req.body.registeredAddress,
            causeSupported: req.body.causeSupported,
            founderName: req.body.founderName,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            emailId: req.body.emailId,
            designationRole: req.body.designationRole,
            cer80G: req.body.cer80G,
            cerFCRA: req.body.cerFCRA,
            webURL: req.body.webURL,
            yearBudget: req.body.yearBudget,
            totalDonor: req.body.totalDonor,
            totalEmployee: req.body.totalEmployee,
            crowdfundedBefore: req.body.crowdfundedBefore,
            NGODescription: req.body.NGODescription,
        })
        console.log(ngoData);
        res.json({ status: 'ok', data: ngoData });
    } catch (err) {
        res.json({ status: 'error', message: err });
    }
})

router.post("/news", upload_news.single("newsImage"), async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({ status: "No file Uploaded" });
        }

        const newsData = await news_data.create({
            newsImage: req.file.path,
            newsName: req.body.newsName,
            newsHeader: req.body.newsHeader,
            newsDescription: req.body.newsDescription,
            newsTime: req.body.newsTime,
            newsDate: req.body.newsDate
        })
        console.log(newsData);
        res.json({ status: 'ok', data: newsData });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "News Name already exists" })
        }
        console.log(error);
    }
})


router.post("/stories", upload_success_stories.single("storiesImage"), async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({ status: "No file Uploaded" });
        }
        const storiesData = await stories_data.create({
            storiesImage: req.file.path,
            storiesName: req.body.storiesName,
            storiesDescription: req.body.storiesDescription,
        })
        console.log(storiesData);
        res.json({ status: 'ok', data: storiesData });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Fundraiser Success Stories already exists" })
        }
        console.log(error);
    }
})


router.post("/contact", async (req, res) => {
    try {
        const contactData = await contact_data.create({
            contact_name: req.body.contact_name,
            contact_email: req.body.contact_email,
            contact_description: req.body.contact_description,
        })
        console.log(contactData);
        res.json({ status: 'ok', data: contactData });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Contact Name already exists" })
        }
        console.log(error);
    }
})

module.exports = router;