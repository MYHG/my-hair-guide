const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to my hair guide')
});

router.get('/register', (req, res) => {
    res.send('GET Registeration');
});

router.get('/login', (req, res) => {
    res.send('GET Login');
});

router.get('/products', (req, res) => {
    res.send('GET products');
});

router.post('/register', (req, res) => {
    res.send('GET Registration');
});


module.exports = router;

