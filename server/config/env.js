const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const databaseURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/my-hair-guide';

module.exports = { env, port, databaseURL };
