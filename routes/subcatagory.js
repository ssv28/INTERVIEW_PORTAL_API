var express = require('express');
var router = express.Router();

var SUBCATAGORYCONTROLLER = require('../Controller/Subcatagory')
var ADMINCONTROLLER = require("../Controller/Admin")


router.post('/create', ADMINCONTROLLER.Sequre, SUBCATAGORYCONTROLLER.subcatagoryCreate);
router.get('/', ADMINCONTROLLER.Sequre, SUBCATAGORYCONTROLLER.subcatagoryFind);
router.delete('/:id', ADMINCONTROLLER.Sequre, SUBCATAGORYCONTROLLER.subcatagoryDelete);
router.patch('/:id', ADMINCONTROLLER.Sequre, SUBCATAGORYCONTROLLER.subcatagoryUpdate);

module.exports = router;
