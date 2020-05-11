const express = require("express");
const { port, databaseURL, env } = require("./server/config/env");
const morgan = require("morgan");
const routes = require("./server/config/routes/user");
const mongoose = require("mongoose");

const app = express();

app.use(express.static('public')); 
app.use(express.json());

app.use('/api', routes);

if(env === 'development') app.use(morgan('dev'));

mongoose.connect(databaseURL, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected');

    })
    .catch((error) => {
        console.log('Error connecting to database');
    });
  
app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.listen(port, () => console.log(`Express is listening on port ${port}`));
