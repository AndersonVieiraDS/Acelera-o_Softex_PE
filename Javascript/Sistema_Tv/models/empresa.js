import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Empresa', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
