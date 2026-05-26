const express = require("express");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
    "/",
    upload.single("file"),
    (req, res) => {

        res.json({
            file: req.file.path
        });
    }
);

module.exports = router;
