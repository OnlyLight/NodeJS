var express = require('express');
var router = express.Router();

var controller = require('../controller/CRUD-SV');

router.get('/list', controller.list);

router.get('/them', controller.themGet);

router.post('/them', controller.themPost);

router.get("/sua/:id", controller.suaGet);

router.post("/sua", controller.suaPost);

router.get("/xoa/:id", controller.xoa);

module.exports = router;