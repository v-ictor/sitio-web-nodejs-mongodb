const express = require('express');
const productCtrl = require('../controllers/productController')

const router = express.Router();

router.get('/', productCtrl.index);
router.post('/', productCtrl.create);
router.get('/:key/:value', productCtrl.find, productCtrl.show);
router.put('/:key/:value', productCtrl.find, productCtrl.update);
router.delete('/:key/:value', productCtrl.find, productCtrl.remove);

module.exports = router;