const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const app = express();
mongoose.connect('mongodb+srv://anking:anking@cluster0.cp0xl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to MongoDB Atlas'))
  .catch(err => console.log(`Error connecting to MongoDB Atlas: \n ${err}`))

app.listen(port, () => console.log(`Server listening at ${port}`));

