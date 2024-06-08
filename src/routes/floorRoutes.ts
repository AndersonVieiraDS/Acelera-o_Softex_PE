import express from 'express';
import { createFloor, deleteFloor, findAllFloors, findFloorById, updateFloor } from '../controllers/floorController';

const router = express.Router();

router.post('/andar', createFloor);
router.get('/andar', findAllFloors);
router.get('/andar/:id', findFloorById);
router.put('/andar/:id', updateFloor);
router.delete('/andar/:id', deleteFloor);

export default router;