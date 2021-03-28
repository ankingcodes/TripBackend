const express = require('express');
const db = require('./models');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const app = express();


app.listen(port, () => console.log(`Server listening at ${port}`));

