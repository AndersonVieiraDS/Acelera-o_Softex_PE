import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './src/routes/clienteRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/cliente', clienteRoutes);
// Adicione outras rotas para outras entidades...

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
