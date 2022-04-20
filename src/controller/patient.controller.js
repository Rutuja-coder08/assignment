const PatientModel = require("../model/patient.model");

const Form = (req, res) => {
  res.render("form")
}

const Home = (req, res) => {
  res.render("Home")
}

const registerPatient = async(req, res) => {
  const { name } = req.body;
  console.log("body", req.body)
  const foundPatient = await PatientModel.findOne({name})
  console.log("found patient", foundPatient)
  if(!foundPatient){
    try{
      const patient = new PatientModel(req.body)
      console.log("Patient",patient)
      const registeredPatient = await patient.save()
      console.log("registeredPatient",registeredPatient)
      return res.render("welcome", {name : name, message : "You Have Been Successfully Registered !!", id : registeredPatient._id})
    }catch(err){
      return res.send(err)
    }
  }else{
    return res.send({message : "Patient already exists. Try Again!"})
  }
}

module.exports = { registerPatient, Home, Form };