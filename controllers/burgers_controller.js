const express = require("express")
const burger = require("../models/burger")
const router = express.Router()
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burger: data
        }
        res.render("index", hbsObj)
    })
})
router.post("/api/burger", function(req, res) {
    burger.insertOne(req.body.name, function(){
        res.redirect("/")
    })
})
router.put("/api/burger/:id", function(req, res) {
    burger.updateOne(req.params.id, function(){
        res.end()
    })
})

module.exports = router