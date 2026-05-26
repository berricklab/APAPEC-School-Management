const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    fullName: String,

    email: {
        type: String,
        unique: true
    },

    username: {
        type: String,
        unique: true
    },

    password: String,

    role: {
        type: String,
        enum: [
            "admin",
            "teacher",
            "student",
            "parent",
            "librarian"
        ]
    },

    school: String,

    profileImage: String

}, {
    timestamps: true
});

module.exports = mongoose.model(
    "User",
    UserSchema
);
