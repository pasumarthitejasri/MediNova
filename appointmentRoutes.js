const express = require("express");

const router = express.Router();

const Appointment = require("./Appointment");


// Book Appointment

router.post("/book", async (req, res) => {

    try {

        const appointment = new Appointment({

            doctor: req.body.doctor,

            department: req.body.department,

            date: req.body.date,

            time: req.body.time,

            reason: req.body.reason

        });


        await appointment.save();


        res.status(201).json({

            message: "Appointment Booked Successfully"

        });


    } catch(error) {

        res.status(500).json({

            error: error.message

        });

    }

});



// Get All Appointments

router.get("/", async (req, res) => {

    try {

        const appointments = await Appointment.find();

        res.json(appointments);


    } catch(error) {

        res.status(500).json({

            error: error.message

        });

    }

});



module.exports = router;
