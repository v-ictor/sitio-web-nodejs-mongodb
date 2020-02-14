const express = require('express');
const authCtrl = require('../controllers/authController');
const router = express.Router();

router.post('/login', authCtrl);

module.exports = router;