// src/app.ts
import express from 'express';
import reservaRoutes from './routes/reservaRoutes';
import espacoRoutes from './routes/espacoRoutes';
import usuarioRoutes from './routes/usuarioRoutes';

const app = express();

app.use('/api/reserva', reservaRoutes);
app.use('/api/espaco', espacoRoutes);
app.use('/api/usuario', usuarioRoutes);

export default app;
