const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    schoolName: String,
    schoolEmail: String,
    schoolPhone: String,
    schoolAddress: String
}, {
    timestamps: true
});

module.exports = mongoose.model("School", schoolSchema);
