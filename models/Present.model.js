const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presentSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
    default: 'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg'
  },
  price: Number,
  recipient: String,
  description: String
})

const Present = mongoose.model('Present', presentSchema);
module.exports = Present;