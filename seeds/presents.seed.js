const mongoose = require ("mongoose");
const Present = require ("../models/Present.model");
const MONGODB_URI = 'mongodb://localhost:27017/dear-santa';
mongoose.set('strictQuery', true);
const presents = require('../data/presents');

mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    return Present.deleteMany();
  })
  .then(() => {
    return Present.create(presents);
  })
  .then(createdPresents => console.log(createdPresents))
  .then(() => {
    mongoose.disconnect();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

