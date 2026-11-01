const mongoose = require("mongoose");
require("dotenv").config();

const Doctor = require("./models/Doctor");


mongoose.connect(process.env.MONGO_URI)
.then(async()=>{

    console.log("MongoDB Connected");


    await Doctor.insertMany([

        {
            name:"Dr. Andrew",
            department:"Cardiology",
            experience:"10 Years",
            availableTime:"10 AM - 4 PM"
        },

        {
            name:"Dr. Sarah",
            department:"Neurology",
            experience:"8 Years",
            availableTime:"9 AM - 2 PM"
        },

        {
            name:"Dr. Michael",
            department:"Orthopedics",
            experience:"12 Years",
            availableTime:"11 AM - 5 PM"
        },

        {
            name:"Dr. Emily",
            department:"Dermatology",
            experience:"6 Years",
            availableTime:"2 PM - 7 PM"
        }

    ]);


    console.log("Doctors Added Successfully");


    mongoose.connection.close();


})
.catch((error)=>{

    console.log(error);

});