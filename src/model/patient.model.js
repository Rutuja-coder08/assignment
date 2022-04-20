const {Schema, model } = require("mongoose")

const patientSchema = new Schema({

    name:{
        type: Schema.Types.String,
        required: true,
        unique: true
    },

    DateOfBirth:{
        type: Schema.Types.Date,
    },

    Gender:{
        type: Schema.Types.String,
    },

    PlaceOfBirth:{
        type: Schema.Types.String,
    },
    BloodGroup:{
        type: Schema.Types.String,  
    },

    Height:{
        type: Schema.Types.Number,
    },

    Weight:{
     type: Schema.Types.Number,
    },

})

const PatientModel = model("Patient", patientSchema);

module.exports = PatientModel;