export default (sequelize, DataTypes) => {
    const Midia = sequelize.define('Midia', {
      id_midia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      tipoMidia: DataTypes.ENUM('audio', 'video', 'imagem'),
      inicioExibicao: DataTypes.DATE,
      terminoExibicao: DataTypes.DATE,
      midia: DataTypes.BLOB('long'),
    });
    return Midia;
  };
  