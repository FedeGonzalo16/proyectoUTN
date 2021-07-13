
const express = require('express');
const mysql = require('mysql2');
const connection = require('./utils/connection');
const config = require('./config/config');

const contactoRouter = require('./routes/contacto');
const signinupRouter = require('./routes/sign-in-up');

const app = express();
app.use(express.json());

/* router.use('./views/contacto', contactoRouter);
router.use('./views/sign-in-up', signinupRouter); */

module.exports = app;