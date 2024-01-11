export default (sequelize, DataTypes) => {
    const Empresa = sequelize.define('Empresa', {
      id_empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cnpj: DataTypes.STRING,
      razaoSocial: DataTypes.STRING,
      nomeFantasia: DataTypes.STRING,
      contato: DataTypes.STRING,
      sala: DataTypes.STRING,
      andar: DataTypes.STRING,
      logomarca: DataTypes.BLOB('long'),
    });
    return Empresa;
  };
  