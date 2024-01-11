export default (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      cpf: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      senha: DataTypes.STRING,
      tipoUsuario: DataTypes.ENUM('op', 'admin'),
    });
    return Usuario;
  };
  