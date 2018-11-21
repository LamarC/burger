//Express routes 

const express = require("express");

const routes = express.Router();

const burger = ("../models/burger.js");

router.get("/", function(req, res) {
    call.all(function(data){
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", function(req, res){
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changeRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res){
    let condition = "id = " + req.param.id;

    burger.delete(condition, function(result){
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Exports routes for server.js
module.exports = router;