import express from 'express';
import { ClienteController } from '../controllers/clienteController';

const router = express.Router();

router.get('/', ClienteController.getAllClientes);
router.post('/', ClienteController.createCliente);
// Outras rotas para cliente...

export default router;
