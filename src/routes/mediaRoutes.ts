import express from 'express';
import { createMedia, deleteMedia, findAllMedia, findMediaById, updateMedia } from '../controllers/mediaController';

const router = express.Router();

router.post('/midia', createMedia);
router.get('/midia', findAllMedia);
router.get('/midia/:id', findMediaById);
router.put('/midia/:id', updateMedia);
router.delete('/midia/:id', deleteMedia);

export default router;