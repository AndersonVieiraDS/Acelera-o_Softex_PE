import { Request, Response } from "express";
import db from '../db';

export const createRoom = async (req: Request, res: Response) => {
    try {
        const { numero, andar_id, criado_por } = req.body;
        const [id] = await db('sala').insert({ numero, andar_id, criado_por }).returning('id');
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar sala' });
    }
};

export const findAllRooms = async (_req: Request, res: Response) => {
    try {
        const rooms = await db('sala').select('*');
        res.status(200).json(rooms);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const findRoomById = async (req: Request, res: Response) => {
    try {
        const room = await db('sala').where({ id: req.params.id }).first();
        if (room) {
            res.status(200).json(room);
        } else {
            res.status(404).json({ error: "Sala não encontrada" });
        }
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const updateRoom = async (req: Request, res: Response) => {
    try {
        const updated = await db('sala').where({ id: req.params.id }).update(req.body).returning('*');
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteRoom = async (req: Request, res: Response) => {
    try {
        await db('sala').where({ id: req.params.id }).del();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};