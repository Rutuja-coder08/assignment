const express = require("express");
require("./db");
const ejs = require("ejs");
const expEjsLayouts = require("express-ejs-layouts");
const PatientRouter = require("./routes/patient.routes");

const app = express();
app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.use(expEjsLayouts);

app.set('layout', './layouts/layout');
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}))  

app.use("/patient", PatientRouter);

app.get("/", (req, res) => {res.render("home")})


module.exports = app;