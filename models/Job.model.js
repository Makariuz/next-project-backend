const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const jobSchema = new Schema({
  positionName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyUrl: {
    type: String,
    required: true,
    unique: true,
  },
  source: {
    type: String,
    required: true,
  },
  skillsRequired: {
    type: String,
    required: true,
  },
  skillsUsed: {
    type: String,
    required: true,
  },
  jobPostedBy: {
    type: String,
  },
  companyFeedback: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
},
author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
},

});

const Job = model("Job", jobSchema);

module.exports = Job;
