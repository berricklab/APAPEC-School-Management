const express = require("express");

const router = express.Router();

router.post("/register", async (req, res) => {

    try {

        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );

        const user = await User.create({
            ...req.body,
            password: hashedPassword
        });

        res.json(user);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

router.post("/login", async (req, res) => {

    try {

        const user = await User.findOne({
            email: req.body.email
        });

        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if(!validPassword){
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);

        res.json({
            token,
            user
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;
