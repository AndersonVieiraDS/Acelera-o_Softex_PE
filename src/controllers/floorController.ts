import { Request, Response } from "express";
import db from '../db';

export const createFloor = async (req: Request, res: Response) => {
    try {
        const { numero, criado_por } = req.body;
        const [id] = await db('andar').insert({ numero, criado_por }).returning('id');
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar andar' });
    }
};

export const findAllFloors = async (_req: Request, res: Response) => {
    try {
        const floors = await db('andar').select('*');
        res.status(200).json(floors);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const findFloorById = async (req: Request, res: Response) => {
    try {
        const floor = await db('andar').where({ id: req.params.id }).first();
        if (floor) {
            res.status(200).json(floor);
        } else {
            res.status(404).json({ error: "Andar não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const updateFloor = async (req: Request, res: Response) => {
    try {
        const updated = await db('andar').where({ id: req.params.id }).update(req.body).returning('*');
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteFloor = async (req: Request, res: Response) => {
    try {
        await db('andar').where({ id: req.params.id }).del();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};