const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({

    student: String,
    className: String,
    status: String,
    date: Date,
    school: String

}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Attendance",
    AttendanceSchema
);
