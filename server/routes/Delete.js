const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ngo_data = require('../modal/ngo');
const fundraiser_data = require('../modal/fundraiser');
const users_data = require('../modal/user');
const payment_data = require('../modal/payment');
const news_data = require('../modal/news');
const stories_data = require('../modal/stories');

router.delete("/ngo/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteNgo = await ngo_data.findByIdAndDelete({ _id: id });
    }catch(err) {
        console.log(err);
    }
})

router.delete("/fundraiser/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteFundraiser = await fundraiser_data.findByIdAndDelete({ _id: id });
    }catch(err) {
        console.log(err);
    }
})

router.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteUser = await users_data.findByIdAndDelete({ _id: id });
    }catch(err) {
        console.log(err);
    }
})

router.delete("/payment/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletePayment = await payment_data.findByIdAndDelete({ _id: id });
    }catch(err) {
        console.log(err);
    }
})

router.delete("/news/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteNews = await news_data.findByIdAndDelete({ _id: id });
    }catch(err) {
        console.log(err);
    }
})

router.delete("/stories/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteStories = await stories_data.findByIdAndDelete({ _id: id });
    }catch(err) {
        console.log(err);
    }
})

module.exports = router;