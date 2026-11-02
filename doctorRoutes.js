const express = require("express");
const router = express.Router();

const Doctor = require("./Doctor");


// Add Doctor

router.post("/", async(req,res)=>{

    try{

        const doctor = new Doctor(req.body);

        await doctor.save();

        res.json({
            message:"Doctor Added Successfully"
        });

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});



// Get Doctors

router.get("/", async(req,res)=>{

    try{

        const doctors = await Doctor.find();

        res.json(doctors);

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});


module.exports = router;
