//Express routes 

const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", {
            burger_data: burgerData
        });
        console.log(burgerData);
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name,
        function (result) {
            res.redirect('/');
            console.log(result);
        });
});

router.put("/burger/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        res.sendStatus(200);
        console.log(result)
    });

});

//Exports routes for server.js
module.exports = router;