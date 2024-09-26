const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionsData = new Schema({
    questions: {
        type: String,
        unique: true,
        required : true
    },
    answer : {
        type: String,
        required : true
    },
    subcatagoryID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subCatagory"
    }
});

let QUESTIONS = mongoose.model('questions',questionsData)
module.exports = QUESTIONS