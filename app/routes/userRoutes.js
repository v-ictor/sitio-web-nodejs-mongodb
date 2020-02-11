const express = require('express');
const userCtrl = require('../controllers/userController');

const router = express.Router();

router.get('/', userCtrl.index);
router.post('/', userCtrl.create);
router.get('/:key/:value', userCtrl.find, userCtrl.show);
router.put('/:key/:value', userCtrl.find, userCtrl.update);
router.delete('/:key/:value', userCtrl.find, userCtrl.remove);

module.exports = router;