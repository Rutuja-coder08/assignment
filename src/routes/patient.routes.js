const express = require("express");
const { registerPatient, Home, Form } = require("../controller/patient.controller");

const PatientRouter = express.Router()

PatientRouter.post("/creation", registerPatient)
PatientRouter.get("/welcome", Home)
PatientRouter.get("/creation", Form)


module.exports = PatientRouter;