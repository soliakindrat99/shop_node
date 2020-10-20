const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT;

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log('Server works '));