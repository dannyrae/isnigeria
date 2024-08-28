const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/send-email");
const template = require("../files/email-notification");

/**
 * @desc Sign up
 * @param : businessName, businessType, businessDescription, portfolio, email, and password
 * */

const signup = async (req, res) => {
    try {
        // Check if an account already exists
        const user = await User.findOne({ email: req.body.email }).exec();

        if (user) {
            return res.status(400).json({
                status: "error",
                message: "Oops! Account already exists. Please try logging in.",
            });
        }

        const hashedPass = await bcrypt.hash(req.body.password, 10);
        // console.log("I am here")

        // if (!req.file) {
        //     console.log("No PDF file uploaded");
        //     return res.status(400).json({
        //         status: "error",
        //         message: "PDF is required for portfolio",
        //     });
        // }

        // console.log(req.file)

        // create user object
        const newUser = new User({
            business_name: req.body.businessName,
            business_description: req.body.businessDescription,
            business_type: req.body.businessType,
            email: req.body.email,
            password: hashedPass,
            // portfolio: req.file.path,
        });

        await sendMail(
            req.body.email,
            "Welcome to I.S Nigeria! Your Account is Successfully Created",
            template
                .replace(/{{businessName}}/g, req.body.businessName)
                .replace(/{{email}}/g, req.body.email)
        );

        const createdUser = await newUser.save();

        const { password, ...others } = createdUser._doc;

        return res.status(201).json({
            status: "success",
            message: "A success mail has been sent to your mail",
            data: others,
        });
    } catch (err) {
        console.log(err.message);
        return err.message;
    }
};

/**
 * @desc Log in
 * @param : email and password
 * */

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if (!user)
            return res
                .status(404)
                .json({ status: "error", message: "Invalid Credentials!" });

        const passwordIsValid = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!passwordIsValid)
            return res
                .status(400)
                .json({ status: false, message: "Invalid Credentials!" });

        let token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.EXPIRES_IN,
            }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({
            message: "success",
            data: others,
            token,
        });
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    signup,
    loginUser,
};
