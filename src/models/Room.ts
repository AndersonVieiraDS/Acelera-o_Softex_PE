import db from '../db';

interface Room {
    id?: number;
    numero: number;
    criado_por: number;
    criado_em?: Date;
    atualizado_em?: Date;
    atualizado_por: number;
    excluido_em?: Date;
    excluido_por: number;
}

export const create = async (room: Room): Promise<number[]> => {
    return db('sala').insert(room).returning('id');
};

export const findAll = async (): Promise<Room[]> => {
    return db('sala').select('*');
};

export const findById = async (id: number): Promise<Room | undefined> => {
    return db('sala').where({ id }).first();
};

export const update = async (id: number, room: Partial<Room>): Promise<number[]> => {
    return db('sala').where({ id }).update(room).returning('*');
};

export const remove = async (id: number): Promise<number> => {
    return db('sala').where({ id }).del();
};

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};