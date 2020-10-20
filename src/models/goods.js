module.exports = (seq, Sequelize) => seq.define('goods', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL(10, 2)
    },
    expiration_date: {
        type: Sequelize.DATEONLY
    },
    weight: {
        type: Sequelize.DOUBLE
    },
    amount: {
        type: Sequelize.INTEGER
    }
});