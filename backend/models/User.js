const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    username: String,
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
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
