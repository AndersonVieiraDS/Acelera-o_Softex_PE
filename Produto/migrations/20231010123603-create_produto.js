'use strict';

export async function up(QueryInterface, Sequelize) {
  await QueryInterface.createTable("Produtos", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING
    },
    preco: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },
    descricao: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(QueryInterface, Sequelize) {
  await QueryInterface.dropTable("Produtos");
}