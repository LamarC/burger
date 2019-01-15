//Express routes 

const express = require("express");

const router = express.Router();

const burger = ("../models/burger.js");
console.log(Object.keys(burger))

router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (data) {
        res.redirect('/');
    });
});

router.put("/api/burger/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (data) {
        res.redirect('/');
    });
});


//Exports routes for server.js
module.exports = router;