const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    fullName: String,
    subject: String,
    qualification: String,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Teacher", teacherSchema);
