const express = require('express');
const router = express.Router();
const users = require('../../controllers/user');

router.post('/register', users.create);

// router.get('/login', users.index);


module.exports = router;

