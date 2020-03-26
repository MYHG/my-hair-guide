const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const db = {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/my-hair-guide-dev'
}

module.exports = { env, port, db };
