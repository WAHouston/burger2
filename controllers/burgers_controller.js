const express = require("express")
const db = require("../models")
const router = express.Router()
router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data) {
        var hbsObj = {
            burger: data
        }
        res.render("index", hbsObj)
    })
})
router.post("/api/burger", function(req, res) {
    db.burger.create({burger_name: req.body.name}).then(function(){
        res.redirect("/")
    })
})
router.put("/api/burger/:id", function(req, res) {
    db.burger.update({devoured: true}, {where: {id: req.params.id}}).then(function(){
        res.end()
    })
})

module.exports = router