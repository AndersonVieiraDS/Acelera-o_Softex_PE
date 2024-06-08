import db from '../db';

interface Person {
    id?: number;
    nome: string;
    cpf: string;
    email: string;
    contato: string;
    telefone: string;
    status: string;
    logo_path: string;
    criado_por: number;
    criado_em?: Date;
    atualizado_em?: Date;
    atualizado_por: number;
    excluido_em?: Date;
    excluido_por: number;
}

export const create = async (person: Person): Promise<number[]> => {
    return db('pessoa_fisica').insert(person).returning('id');
};

export const findAll = async (): Promise<Person[]> => {
    return db('pessoa_fisica').select('*');
};

export const findById = async (id: number): Promise<Person | undefined> => {
    return db('pessoa_fisica').where({ id }).first();
};

export const update = async (id: number, person: Partial<Person>): Promise<number[]> => {
    return db('pessoa_fisica').where({ id }).update(person).returning('*');
};

export const remove = async (id: number): Promise<number> => {
    return db('pessoa_fisica').where({ id }).del();
};

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};