import { Router } from 'express';
const router = Router();
import { getAllMidias, getMidiaById, createMidia, updateMidia, deleteMidia } from '../controllers/midiaController';

// Rotas para Mídia
router.get('/', getAllMidias);
router.get('/:id_midia', getMidiaById);
router.post('/', createMidia);
router.put('/:id_midia', updateMidia);
router.delete('/:id_midia', deleteMidia);

export default router;
