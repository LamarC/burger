const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

//Access to public directory
app.use(express.static("public"));

//
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Routes
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start server so it can listen
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
});