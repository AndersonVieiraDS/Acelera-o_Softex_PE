import { Router } from 'express';
const router = Router();
import { getAllEmpresas, getEmpresaById, createEmpresa, updateEmpresa, deleteEmpresa } from '../controllers/empresaController';

// Rotas para Empresa
router.get('/', getAllEmpresas);
router.get('/:id_empresa', getEmpresaById);
router.post('/', createEmpresa);
router.put('/:id_empresa', updateEmpresa);
router.delete('/:id_empresa', deleteEmpresa);

export default router;
