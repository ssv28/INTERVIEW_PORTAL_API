var express = require('express');
var router = express.Router();
var ADMINCONTROLLER = require('../Controller/Admin')


router.post('/signup', ADMINCONTROLLER.adminSignup);
router.post('/login', ADMINCONTROLLER.adminLogin);

module.exports = router;
