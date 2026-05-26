const express = require("express");
const Attendance = require("../models/Attendance");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {

    const attendance = await Attendance.create(
        req.body
    );

    res.json(attendance);
});

router.get("/", auth, async (req, res) => {

    const data = await Attendance.find({
        school: req.user.school
    });

    res.json(data);
});

module.exports = router;
