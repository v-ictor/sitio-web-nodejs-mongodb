const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Product = require('./routes/productRoutes');
const User = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/product', Product);
app.use('/user', User);

module.exports = app;