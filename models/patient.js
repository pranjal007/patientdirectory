const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema; 

const patientSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true},
    firstname: { type: String, required: true, lowercase: true },
    lastname: { type: String, required: true, lowercase: true },
    age: { type: Number, required: true},
    DOB: { type: Date, required: true },
    gender: { type: String, required: true },
    phone: {type:Number, required: true},
    freetext: { type: String },
    date: {type: Date}
})

module.exports = mongoose.model('patient', patientSchema);