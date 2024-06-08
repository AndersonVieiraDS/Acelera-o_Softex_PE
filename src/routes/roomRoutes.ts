import express from 'express';
import { createRoom, deleteRoom, findAllRooms, findRoomById, updateRoom } from '../controllers/roomController';

const router = express.Router();

router.post('/sala', createRoom);
router.get('/sala', findAllRooms);
router.get('/sala/:id', findRoomById);
router.put('/sala/:id', updateRoom);
router.delete('/sala/:id', deleteRoom);

export default router;