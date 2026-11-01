const mongoose = require("mongoose");


const doctorSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    department:{
        type:String,
        required:true
    },

    experience:{
        type:String
    },

    availableTime:{
        type:String
    }

});


module.exports = mongoose.model("Doctor", doctorSchema);