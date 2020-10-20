const sequelize = require("sequelize");

const category_model = require('../models/category');
const provider_model = require('../models/provider');
const goods = require('../models/goods');

const seq = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: "localhost"
});

const category = category_model(seq, sequelize);
const provider = provider_model(seq, sequelize);
const goods = goods(seq, sequelize);

category.hasMany(goods);
provider.hasMany(goods);

seq.sync().then(result => console.log(result))
    .catch(err => console.log(err));

module.exports = seq;