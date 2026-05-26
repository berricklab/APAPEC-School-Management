const express = require("express");
const PDFDocument = require("pdfkit");
const Grade = require("../models/Grade");

const router = express.Router();

router.get("/report/:student", async (req, res) => {

    const grades = await Grade.find({
        student: req.params.student
    });

    const doc = new PDFDocument();

    res.setHeader(
        "Content-Type",
        "application/pdf"
    );

    doc.pipe(res);

    doc.fontSize(24).text("Student Report Card");

    grades.forEach(g => {

        doc.text(
            `${g.subject} : ${g.marks} (${g.grade})`
        );
    });

    doc.end();
});

module.exports = router;
