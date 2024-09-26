const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catagoryData = new Schema({
    catagoryName: {
        type: String,
        unique: true,
        required : true
    },
    status: {
        type: String,
        enum : ["on","off"],
        default : "on"
    }
});

let CATAGORY = mongoose.model('catagory',catagoryData)
module.exports = CATAGORY