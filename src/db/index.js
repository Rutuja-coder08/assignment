const { connect } = require("mongoose");

const uri = "mongodb+srv://Rutuja:TURwOaU0gGRSFb8i@cluster0.0afbj.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)