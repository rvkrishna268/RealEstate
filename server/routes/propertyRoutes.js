const express = require('express');
const router = express.Router();
const propModel = require('../model/property');
const auth = require('../middleware/auth');
const cors = require('cors');

router.use(cors());

// get request to display properties at home page
router.get('/home',auth, async(req,res) => {
    try {
        const data = await propModel.find();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})

// post request to add property
 router.post('/add-prop',auth, async (req,res) => {
    try {
        const prop = await propModel.create(req.body);
        res.status(201).json({
            status: "success",
            prop
        })
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            err: err.message
        })
    }
 })




// export router
module.exports = router;