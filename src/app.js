const express = require('express');
const dotenv = require('dotenv');
const body_parser = require('body-parser');
dotenv.config({ path: "./config/.env" });
const port = process.env.PORT;

const index_router = require('./routes/index.js');
const goods_router = require('./routes/goods.js');
const auth_router = require('./routes/authorization.js');
const check_access_token = require('./middlewares/check_access_token.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json());

app.use('/', check_access_token, index_router);
app.use('/goods', check_access_token, goods_router);
app.use('/auth', auth_router);

app.listen(port, () => console.log('Server has started to work!'));