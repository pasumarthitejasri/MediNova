const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();


app.use(cors());
app.use(express.json());


// Routes
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const doctorRoutes = require("./routes/doctorRoutes");


app.use("/api/users", userRoutes);

app.use("/api/appointments", appointmentRoutes);

app.use("/api/doctors", doctorRoutes);



app.get("/", (req,res)=>{

    res.send("MediNova Backend Running");

});



// MongoDB Connection

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((error)=>{

    console.log(error);

});



const PORT = 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});