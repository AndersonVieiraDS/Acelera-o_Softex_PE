import { Router, Request, Response } from 'express';

const router = Router();

// Exemplo de rota de teste
router.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo ao CoworkTech API!');
});

// Defina suas rotas para usuários, espaços e reservas aqui
// Exemplo:
// router.use('/api/users', userRoutes);
// router.use('/api/spaces', spaceRoutes);
// router.use('/api/reservations', reservationRoutes);

export default router;
