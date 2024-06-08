import { Request, Response } from "express";
import db from '../db';

export const createUser = async (req: Request, res: Response) => {
    const { nome_completo, cpf, email, login, senha, status, tipo_usuario, criado_por } = req.body;

    try {
        const [id] = await db('usuarios').insert({
            nome_completo,
            cpf,
            email,
            login,
            senha,
            status,
            tipo_usuario,
            criado_em: new Date(),
            criado_por
        }).returning('id');

        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar usuário' });
    }
};

export const findAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await db('usuarios').select('*');
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const findUserById = async (req: Request, res: Response) => {
    try {
        const user = await db('usuarios').where({ id: req.params.id }).first();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome_completo, cpf, email, login, senha, status, tipo_usuario, atualizado_por } = req.body;

    try {
        await db('usuarios')
            .where({ id })
            .update({
                nome_completo,
                cpf,
                email,
                login,
                senha,
                status,
                tipo_usuario,
                atualizado_em: new Date(),
                atualizado_por
            });

        const updatedUser = await db('usuarios').where({ id }).first();

        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedRows = await db('usuarios').where({ id }).del();

        if (deletedRows) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar usuário' });
    }
};