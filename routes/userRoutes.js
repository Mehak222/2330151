const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.send("Users Route");

});

router.post("/create", (req, res) => {

    res.send("User Created");

});

module.exports = router;