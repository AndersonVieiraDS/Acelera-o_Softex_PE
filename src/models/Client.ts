import db from '../db';

interface Client {
    id?: number;
    cliente_id: number;
}

export const create = async (client: Client): Promise<number[]> => {
    return db('cliente').insert(client).returning('id');
};

export const findAll = async (): Promise<Client[]> => {
    return db('cliente').select('*');
};

export const findById = async (id: number): Promise<Client | undefined> => {
    return db('cliente').where({ id }).first();
};

export const update = async (id: number, client: Partial<Client>): Promise<number[]> => {
    return db('cliente').where({ id }).update(client).returning('*');
};

export const remove = async (id: number): Promise<number> => {
    return db('cliente').where({ id }).del();
};

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};