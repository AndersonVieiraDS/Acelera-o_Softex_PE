import express from 'express';
import { createPerson, deletePerson, findAllPersons, findPersonById, updatePerson } from '../controllers/personController';

const router = express.Router();

router.post('/pessoa_fisica', createPerson);
router.get('/pessoa_fisica', findAllPersons);
router.get('/pessoa_fisica/:id', findPersonById);
router.put('/pessoa_fisica/:id', updatePerson);
router.delete('/pessoa_fisica/:id', deletePerson);

export default router;