const express = require("express");
const router = express.Router();

router.get("/users", (req, res)=> {
    res.send("Users sayfasi URL'i: " + req.url)
})

router.get("/users/:name", (req, res)=> {
    res.send("Users sayfasi parametreli URL'i: " + req.url)
})

module.exports = router