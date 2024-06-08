import express from 'express';
import { createUser, deleteUser, findAllUsers, findUserById, updateUser } from '../controllers/userController';

const router = express.Router();

router.post('/usuarios', createUser);
router.get('/usuarios', findAllUsers);
router.get('/usuarios/:id', findUserById);
router.put('/usuarios/:id', updateUser);
router.delete('/usuarios/:id', deleteUser);

export default router;