import { Router } from 'express';
const router = Router();
import { getAllUsuarios, getUsuarioByCpf, createUsuario, updateUsuario, deleteUsuario } from '../controllers/usuarioController';

// Rotas para Usuário
router.get('/', getAllUsuarios);
router.get('/:cpf', getUsuarioByCpf);
router.post('/', createUsuario);
router.put('/:cpf', updateUsuario);
router.delete('/:cpf', deleteUsuario);

export default router;
