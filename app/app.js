const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Product = require('./routes/productRoutes');
const User = require('./routes/userRoutes');
const Auth = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/product', Product);
app.use('/user', User);
app.use('/auth', Auth);

module.exports = app;