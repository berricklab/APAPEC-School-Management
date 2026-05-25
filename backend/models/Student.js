const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fullName: String,
    className: String,
    gender: String,
    parentPhone: String,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);
