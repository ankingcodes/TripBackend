const mongoose = require('mongoose');
const transportSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String, 
  type: String, 
  tickets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ticketSchema'
  }]
});

module.exports = transportSchema;
