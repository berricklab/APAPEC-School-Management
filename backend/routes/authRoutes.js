const express = require("express");
        res.status(201).json(user);

    } catch (error) {

        res.status(500).json(error);
    }
});

router.post("/login", async (req, res) => {

    try {

        const {
            login,
            password
        } = req.body;

        const user = await User.findOne({
            $or: [
                { email: login },
                { username: login }
            ]
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const matched = await bcrypt.compare(
            password,
            user.password
        );

        if (!matched) {
            return res.status(401).json({
                message: "Wrong Password"
            });
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role,
            school: user.school
        }, process.env.JWT_SECRET);

        res.json({
            token,
            user
        });

    } catch (error) {

        res.status(500).json(error);
    }
});

module.exports = router;
