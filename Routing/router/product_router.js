const express = require("express");
const router = express.Router();

router.get("/products/:name", (req, res)=> {
    res.send("Users sayfasi URL'i: " + req.url)
})


module.exports = router