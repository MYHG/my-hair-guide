const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const { port, databaseURL, env } = require('./server/config/env');
const routes = require('./server/config/routes/user');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/api', routes);

if (env === 'development') app.use(morgan('dev'));

mongoose.connect(databaseURL, { useNewUrlParser: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log(error);
  });
app.get('/*', (req, res) => res.sendFile(path.join('__dirname', '/public/index.html')));
app.listen(port, () => console.log(`Express is listening on port ${port}`));
