import { Request, Response } from "express";
import db from '../db';

export const createMedia = async (req: Request, res: Response) => {
    try {
        const { titulo, descricao, tipo, caminho, cliente_id, status, data_inicio, data_fim, criado_por } = req.body;
        const [id] = await db('midia').insert({ titulo, descricao, tipo, caminho, cliente_id, status, data_inicio, data_fim, criado_por }).returning('id');
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar mídia' });
    }
};

export const findAllMedia = async (_req: Request, res: Response) => {
    try {
        const media = await db('midia').select('*');
        res.status(200).json(media);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const findMediaById = async (req: Request, res: Response) => {
    try {
        const media = await db('midia').where({ id: req.params.id }).first();
        if (media) {
            res.status(200).json(media);
        } else {
            res.status(404).json({ error: "Mídia não encontrada" });
        }
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const updateMedia = async (req: Request, res: Response) => {
    try {
        const updated = await db('midia').where({ id: req.params.id }).update(req.body).returning('*');
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteMedia = async (req: Request, res: Response) => {
    try {
        await db('midia').where({ id: req.params.id }).del();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};