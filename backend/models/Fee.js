const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
    studentName: String,
    amount: Number,
    status: String,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Fee", feeSchema);
