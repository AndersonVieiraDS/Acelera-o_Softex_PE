import { Request, Response } from "express";
import db from '../db';

export const createCompany = async (req: Request, res: Response) => {
    try {
        const { nome, cnpj, email, contato, telefone, status, logo_path, criado_por } = req.body;
        const [id] = await db('pessoa_juridica').insert({ nome, cnpj, email, contato, telefone, status, logo_path, criado_por }).returning('id');
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar pessoa jurídica' });
    }
};

export const findAllCompanies = async (_req: Request, res: Response) => {
    try {
        const companies = await db('pessoa_juridica').select('*');
        res.status(200).json(companies);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const findCompanyById = async (req: Request, res: Response) => {
    try {
        const company = await db('pessoa_juridica').where({ id: req.params.id }).first();
        if (company) {
            res.status(200).json(company);
        } else {
            res.status(404).json({ error: "Pessoa jurídica não encontrada" });
        }
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const updateCompany = async (req: Request, res: Response) => {
    try {
        const updated = await db('pessoa_juridica').where({ id: req.params.id }).update(req.body).returning('*');
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteCompany = async (req: Request, res: Response) => {
    try {
        await db('pessoa_juridica').where({ id: req.params.id }).del();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};