const mongoose = require('mongoose');

const Animal = mongoose.Schema({
    name : {type: String, required: true},
    birthDate : {type:Date, required: true},
    cageNumber : {type:Number, required: true},
    gender : {type:String, required: true}, 
    species : {type:String, required: true}
}, {timestamps: true}); 

module.exports = mongoose.model('Animal', Animal);