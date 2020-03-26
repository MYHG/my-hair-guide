const express = require("express");
const { port, db, env } = require("./config/env");
const morgan = require("morgan");

const app = express();

app.use(express.static('./public'));
app.use(express.json());

if(env === 'development') app.use(morgan('dev'));

app.get('/*', (req, res) => res.sendFile(`${__dirname/public/index.html}`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
