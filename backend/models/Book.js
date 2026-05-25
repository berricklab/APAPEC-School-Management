const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    quantity: Number,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema);
