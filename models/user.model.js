const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    business_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    business_type: {
        type: String,
        required: true,
    },
    business_description: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    portfolio: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
