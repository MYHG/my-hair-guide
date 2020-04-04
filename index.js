const express = require("express");
const { port, db, env } = require("./server/config/env");
const morgan = require("morgan");
const routes = require("./server/config/routes");
const mongoose = require("mongoose");

const app = express();

app.use(express.static('./public'));
app.use(express.json());

if(env === 'development') app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/my-hair-guide', { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log('Error connecting to database');
    });
  
app.get('/*', (req, res) => res.sendFile(`${__dirname/public/index.html}`));
app.listen(port, () => console.log(`Express is listening on port ${port}`));
