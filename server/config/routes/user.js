const express = require('express');
const router = express.Router();
const users = require('../../controllers/user');

router.route('/register')
.post(users.createAccount);

router.route('/hair-quiz/:id')
.post(users.createEntry);

router.route('/user/:id')
.get(users.show)
.get(users.createEntry);

module.exports = router;

