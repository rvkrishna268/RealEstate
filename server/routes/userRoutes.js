const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const userModel = require("../model/user");
const cors = require('cors');
const auth = require("../middleware/auth");

const secret = "RESTAPI";


dotenv.config();
router.use(cors());

router.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmpassword, name } = req.body;
    if (!(email && password && confirmpassword && name)) {
      res.status(400).send({status: "failed",message:"All input is required"});
    }
    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(409).send({status: "failed",message:"User Already Exist. Please Login"});
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    if (password === confirmpassword) {
      const user = await userModel.create({
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });
// console.log(user)
      res.json({
        status: "sucess",
        message: "SignUp Successful",
        user,
      });
    } else {
      res.json({
        status: "failed",
        message: "Password Mismatch",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const data = await userModel.findOne({ email });
    if (!data) {
      return res.status(400).json({
        status: "failed",
        message: "User is not Registerd Please Click On Sigup For Registration",
      });
    } else {
      if (!bcrypt.compareSync(password, data.password)) {
        res.json({
          status: "failed",
          message: "Wrong Password",
        });
      } 
      else {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: data._id,
          },
          process.env.TOKEN_KEY
        );

        res.json({
          status: "Sucess",
          token,
          data
        });
      }
    }
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.put("/logout", auth, function (req, res) {
  console.log("entered");
  const authHeader = req.headers["x-access-token"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "You Have been Logged Out" });
    } else {
      res.send({ msg: "Error" });
    }
  });
});


module.exports = router;
