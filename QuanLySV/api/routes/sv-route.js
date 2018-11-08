var express = require('express');
var router = express.Router();

var controller = require('../controller/sv-list');

router.get('/todo/search-hoten', controller.search);
router.get('/todo/search-email', controller.searchEmail);
router.get('/todo/filter', controller.filter);

router.get('/list', controller.list);
router.post('/create', controller.create);

router.get('/list/:id', controller.listID);
router.patch('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;