import db from '../db';

interface User {
    id?: number;
    status: string;
    tipo_usuario: string;
    nome_completo: string;
    cpf: string;
    email: string;
    login: string;
    senha: string;
    criado_por: number;
    criado_em?: Date;
    atualizado_em?: Date;
    atualizado_por: number;
    excluido_em?: Date;
    excluido_por: number;
}

export const create = async (user: User): Promise<number[]> => {
    return db('usuarios').insert(user).returning('id');
};

export const findAll = async (): Promise<User[]> => {
    return db('usuarios').select('*');
};

export const findById = async (id: number): Promise<User | undefined> => {
    return db('usuarios').where({ id }).first();
};

export const update = async (id: number, user: Partial<User>): Promise<number[]> => {
    return db('usuarios').where({ id }).update(user).returning('*');
};

export const remove = async (id: number): Promise<number> => {
    return db('usuarios').where({ id }).del();
};

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};