const mongoose = require('mongoose');

let options = {
  keepAlive: 300000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 30000,
  useNewUrlParser: true,
  useFindAndModify: false,
  bufferMaxEntries: 0,
  poolSize: 30,
  useUnifiedTopology: true,
};
/**
 * conn with user:passwork
 */
//let mongoUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${ process.env.DB_NAME}?authSource=${process.env.DB_AUTH}&authMechanism=SCRAM-SHA-1`;

let mongoUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.set('useCreateIndex', true);
const db = mongoose.createConnection(mongoUrl, options);

db.once('connected', () => {
  console.log(`Mongodb connection ${process.env.DB_NAME}`);
  return db;
});

db.on('disconnected', () => {
  console.log('connection disconnected');
});

db.on('error', (err) => {
  console.log('Error in mongodb connection: ', err);
});

process.on('exit', (code) => {
  db.close();
  console.log(`About to exit with code: ${code}`);
});
process.on('SIGINT', function () {
  console.log('Caught interrupt signal');
  process.exit();
});

exports.api = db.useDb('api');
/**
 * export other db.
 */
//exports.log = db.useDb('log');



