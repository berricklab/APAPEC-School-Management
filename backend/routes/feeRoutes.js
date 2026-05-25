const express = require("express");const router = express.Router();
const Fee = require("../models/Fee");

router.post("/add", async (req, res) => {
    try {
        const fee = await Fee.create(req.body);
        res.json(fee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/all", async (req, res) => {
    try {
        const fees = await Fee.find();
        res.json(fees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router
