const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/post", async (req, res) => {
    try {
        const { name, email, number, feedback } = req.body;
        const newContact = new Contact({ name, email, number, feedback });
        await newContact.save();
        res.status(200).json({ message: "Data Saved" });
    } catch (error) {
        res.status(400).json({ message: "Technical Error Occurred" });
    }
});

module.exports = router;
