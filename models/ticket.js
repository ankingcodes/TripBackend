const mongoose = require('mongoose');
const ticketSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dest: String, 
  src: String, 
  price: Number,
  discount: Number
});

module.exports = ticketSchema;
