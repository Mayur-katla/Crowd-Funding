const mongoose = require('mongoose');

const Fundraiser_schema = new mongoose.Schema({
    catFund: { type: String },
    fundRaise: { type: String },
    patientRelative: { type: String },
    educationQualification: { type: String },
    employeeStatus: { type: String },
    fullName: { type: String, unique: true, required: true },
    patientAge: { type: Number },
    medicalCondition: { type: String },
    hospitalName: { type: String },
    emailAddress: { type: String, unique: true, required: true},
    fundImage: { type: String },
    // fundDocuments: {type: String},
    patientDescription: { type: String }
})

const Fundraiser_details = mongoose.model("Fundraiser", Fundraiser_schema);
module.exports = Fundraiser_details;