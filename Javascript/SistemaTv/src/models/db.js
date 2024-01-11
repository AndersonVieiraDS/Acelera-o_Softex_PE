import { Sequelize } from 'sequelize';

// Substitua 'nome_do_banco', 'nome_usuario' e 'senha_usuario' pelos seus próprios valores
const sequelize = new Sequelize('nome_do_banco', 'nome_usuario', 'senha_usuario', {
  host: 'localhost',
  dialect: 'postgres',
});

// Testar a conexão
async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

// Chamar a função para testar a conexão
testarConexao();

export default sequelize;
