const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('GET Homepage');
    req.body();
    console.log(req.body, "Welcome to my hair-guide");
});

app.get('/register', (req, res) => {
    res.send('GET Registeration');
});

app.get('/login', (req, res) => {
    res.send('GET Login');
});

app.get('/products', (req, res) => {
    res.send('GET products');
});

app.post('/register', (req, res) => {
    res.send('GET Registration');
});




