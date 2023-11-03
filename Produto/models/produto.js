module.exports = (Sequelize, DataTypes) => {
    const Produto = Sequelize.define('produto', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco : {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao : {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Produto;
}