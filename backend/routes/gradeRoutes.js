const express = require("express");
const router = express.Router();
const Grade = require("../models/Grade");

router.post("/add", async (req, res) => {
    try {
        const grade = await Grade.create(req.body);
        res.json(grade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/all", async (req, res) => {
    try {
        const grades = await Grade.find();
        res.json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
