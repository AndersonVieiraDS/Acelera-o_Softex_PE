import express from 'express';
import { createClient, deleteClient, findAllClients, findClientById, updateClient } from '../controllers/clientController';

const router = express.Router();

router.post('/cliente', createClient);
router.get('/cliente', findAllClients);
router.get('/cliente/:id', findClientById);
router.put('/cliente/:id', updateClient);
router.delete('/cliente/:id', deleteClient);

export default router;