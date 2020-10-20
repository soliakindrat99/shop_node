const { goods } = require('../db/sequelize.js');

exports.all_goods = (req, res) => {
    goods.findAll().then((users) => res.json(users));
};

exports.get_goods = (req, res) => {
    goods.findOne({
            where: { id: req.params.id }
        })
        .then((user) => res.json(user));
};