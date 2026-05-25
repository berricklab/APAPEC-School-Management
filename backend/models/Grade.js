const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    studentName: String,
    subject: String,
    marks: Number,
    grade: String,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Grade", gradeSchema);
