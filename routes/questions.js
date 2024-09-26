var express = require('express');
var router = express.Router();
var QUESTIONSCONTROLLER = require('../Controller/Question')
var ADMINCONTROLLER = require("../Controller/Admin")

router.post('/create',ADMINCONTROLLER.Sequre,QUESTIONSCONTROLLER.questionsCreate);
router.get('/',ADMINCONTROLLER.Sequre,QUESTIONSCONTROLLER.questionsFind);
router.delete('/:id',ADMINCONTROLLER.Sequre,QUESTIONSCONTROLLER.questionsDelete);
router.patch('/:id',ADMINCONTROLLER.Sequre,QUESTIONSCONTROLLER.questionsUpdate);

module.exports = router;
