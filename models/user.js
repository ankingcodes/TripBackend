const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  sex: String,
  mail: String,
  phNo: String
});

module.export = userSchema;
