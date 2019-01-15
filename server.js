const express = require("express");

const methodOverride = require('method-override');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(methodOverride("_method"));

//Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Routes
const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

//Start server so it can listen
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});