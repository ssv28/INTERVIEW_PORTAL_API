var express = require('express');
var router = express.Router();

var CATAGORYCONTROLLER = require('../Controller/Catagory')
var ADMINCONTROLLER = require('../Controller/Admin')

router.post('/create', ADMINCONTROLLER.Sequre, CATAGORYCONTROLLER.catagoryCreate);
router.get('/', ADMINCONTROLLER.Sequre, CATAGORYCONTROLLER.catagoryFind);
router.delete('/:id', ADMINCONTROLLER.Sequre, CATAGORYCONTROLLER.catagoryDelete);
router.patch('/:id', ADMINCONTROLLER.Sequre, CATAGORYCONTROLLER.catagoryUpdate);

module.exports = router;
