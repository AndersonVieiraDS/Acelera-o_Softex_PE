import { Request, Response } from "express";
import db from '../db';

export const createClient = async (req: Request, res: Response) => {
    try {
        const { tipo, cliente_id } = req.body;
        const [id] = await db('cliente').insert({ tipo, cliente_id }).returning('id');
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar cliente' });
    }
};

export const findAllClients = async (_req: Request, res: Response) => {
    try {
        const clients = await db('cliente').select('*');
        res.status(200).json(clients);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const findClientById = async (req: Request, res: Response) => {
    try {
        const client = await db('cliente').where({ id: req.params.id }).first();
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ error: "Cliente não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const updateClient = async (req: Request, res: Response) => {
    try {
        const updated = await db('cliente').where({ id: req.params.id }).update(req.body).returning('*');
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteClient = async (req: Request, res: Response) => {
    try {
        await db('cliente').where({ id: req.params.id }).del();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};