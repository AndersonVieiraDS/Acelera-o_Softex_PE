// app.ts
import express from 'express';
import { Pool } from 'pg';

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
  host: 'localhost',
  port: 5432,
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

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
