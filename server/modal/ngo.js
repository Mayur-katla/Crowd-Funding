const mongoose = require('mongoose');

const ngo = new mongoose.Schema({
    registeredNonProfit: String,
    orgName: String,
    registeredAddress: String,
    causeSupported: String,
    founderName: String,
    name: String,
    phoneNumber: String,
    emailId : String,
    designationRole: String,
    cer80G: String,
    cerFCRA: String,
    webURL: String,
    yearBudget: String,
    totalDonor: String,
    totalEmployee: String,
    crowdfundedBefore: String,
    NGODescription: String,
}); 

const ngo_data = mongoose.model("ngo", ngo);
module.exports = ngo_data;