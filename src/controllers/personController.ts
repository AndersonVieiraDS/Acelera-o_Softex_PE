import { Request, Response } from "express";
import db from '../db';

export const createPerson = async (req: Request, res: Response) => {
    try {
        const { nome, cpf, email, contato, telefone, status, logo_path, criado_por } = req.body;
        const [id] = await db('pessoa_fisica').insert({ nome, cpf, email, contato, telefone, status, logo_path, criado_por }).returning('id');
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar pessoa física' });
    }
};

export const findAllPersons = async (_req: Request, res: Response) => {
    try {
        const persons = await db('pessoa_fisica').select('*');
        res.status(200).json(persons);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const findPersonById = async (req: Request, res: Response) => {
    try {
        const person = await db('pessoa_fisica').where({ id: req.params.id }).first();
        if (person) {
            res.status(200).json(person);
        } else {
            res.status(404).json({ error: "Pessoa física não encontrada" });
        }
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const updatePerson = async (req: Request, res: Response) => {
    try {
        const updated = await db('pessoa_fisica').where({ id: req.params.id }).update(req.body).returning('*');
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deletePerson = async (req: Request, res: Response) => {
    try {
        await db('pessoa_fisica').where({ id: req.params.id }).del();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};