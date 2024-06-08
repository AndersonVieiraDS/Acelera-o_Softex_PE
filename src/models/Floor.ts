import db from '../db';

interface Floor {
    id?: number;
    numero: number;
    criado_por: number;
    criado_em?: Date;
}

export const create = async (floor: Floor): Promise<number[]> => {
    return db('andar').insert(floor).returning('id');
};

export const findAll = async (): Promise<Floor[]> => {
    return db('andar').select('*');
};

export const findById = async (id: number): Promise<Floor | undefined> => {
    return db('andar').where({ id }).first();
};

export const update = async (id: number, floor: Partial<Floor>): Promise<number[]> => {
    return db('andar').where({ id }).update(floor).returning('*');
};

export const remove = async (id: number): Promise<number> => {
    return db('andar').where({ id }).del();
};

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};