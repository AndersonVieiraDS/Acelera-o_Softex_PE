import express from 'express';
import { createCompany, deleteCompany, findAllCompanies, findCompanyById, updateCompany } from '../controllers/companyController';

const router = express.Router();

router.post('/pessoa_juridica', createCompany);
router.get('/pessoa_juridica', findAllCompanies);
router.get('/pessoa_juridica/:id', findCompanyById);
router.put('/pessoa_juridica/:id', updateCompany);
router.delete('/pessoa_juridica/:id', deleteCompany);

export default router;