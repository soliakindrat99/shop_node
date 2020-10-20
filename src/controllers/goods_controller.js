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

exports.create_goods = (req, res) => {
    goods.create(req.body)
        .then((goods) => res.json(goods))
        .catch((err) => {
            res.status(400).send({ message: err.message() || "Body can not be empty!!!" });
        });
};

exports.delete_goods = (req, res) => {
    goods.destroy({
            where: { id: req.params.id }
        })
        .then((result) => {
            if (result == 1) {
                res.send({
                    message: "The goods was successfully deleted!"
                });
            } else {
                res.send({
                    message: "The goods could not be deleted!"
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Delete error" });
        });
};

exports.update_goods = (req, res) => {
    goods.update({
            where: { id: req.params.id }
        })
        .then((result) => {
            if (result == 1) {
                res.send({
                    message: "The goods was successfully updated!"
                });
            } else {
                res.send({
                    message: "The goods could not be updated!"
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Update error" });
        });
};