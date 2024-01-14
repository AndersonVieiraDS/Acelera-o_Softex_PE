// app.ts
import express from 'express';
import { Pool } from 'pg';

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'postgres',
  password: '9830',
  database: 'Projeto Softex',
  host: 'localhost',
  port: 5433,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT $1::text as message', ['Olá PostgreSQL']);
    res.send(result.rows[0].message);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Novo endpoint para criar a tabela
app.get('/criar-tabela', async (req, res) => {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL
      )
    `;
    await pool.query(query);
    res.send('Tabela "usuarios" criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
    res.status(500).send('Erro interno do servidor ao criar a tabela');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
