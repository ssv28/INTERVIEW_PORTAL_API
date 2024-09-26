const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcatagoryData = new Schema({
    subCatagoryname: {
        type: String,
        unique: true,
        required : true
    },
    catagoryID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "catagory"
    },
    status: {
        type: String,
        enum : ["on","off"],
        default : "on"
    }
});

let SUBCATAGORY = mongoose.model('subCatagory',subcatagoryData)
module.exports = SUBCATAGORY