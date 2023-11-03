export default (Sequelize, DataTypes) => {
    const Produto = Sequelize.define('cadastro', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Produto;
}