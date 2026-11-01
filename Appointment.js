const mongoose = require("mongoose");


const appointmentSchema = new mongoose.Schema({

    doctor:{
        type:String,
        required:true
    },

    department:{
        type:String
    },

    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    reason:{
        type:String
    }

});


module.exports = mongoose.model(
    "Appointment",
    appointmentSchema
);