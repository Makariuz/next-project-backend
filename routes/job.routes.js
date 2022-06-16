const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body } = require("express-validator");
const User = require("../models/User.model");
const Job = require("../models/Job.model");
const validate = require("../middlewares/validate.middleware");
const { authenticate } = require("../middlewares/jwt.middleware");

const router = express.Router();

router.post('/add-job', authenticate, async (req,res ) => {
    const { positionName, companyName, companyUrl, source, skillsRequired, skillsUsed, jobPostedBy, companyFeedback} = req.body;

    try {
        const tracker = await Job.create({
          positionName,
          companyName,
          companyUrl,
          source,
          skillsRequired,
          skillsUsed,
          jobPostedBy,
          companyFeedback,
          author: req.jwtPayload.user._id,
        });
        console.log(req.jwtPayload.user)
        res.status(200).json(tracker);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }

})


  


module.exports = router;