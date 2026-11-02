const express = require("express");
const router = express.Router();

const User = require("./User");


// Register User
router.post("/register", async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.json({
            message:"User Registered Successfully"
        });

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});



// Login User
router.post("/login", async (req,res)=>{

    try{

        const user = await User.findOne({

            email:req.body.email,

            password:req.body.password

        });


        if(user){

            res.json({
                message:"Login Successful",
                user:user
            });

        }
        else{

            res.status(401).json({
                message:"Invalid Credentials"
            });

        }

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});


module.exports = router;
