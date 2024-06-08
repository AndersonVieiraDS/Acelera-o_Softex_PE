import db from '../db';

interface Company {
    id?: number;
    nome: string;
    cnpj: string;
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

export const create = async (company: Company): Promise<number[]> => {
    return db('pessoa_juridica').insert(company).returning('id');
};

export const findAll = async (): Promise<Company[]> => {
    return db('pessoa_juridica').select('*');
};

export const findById = async (id: number): Promise<Company | undefined> => {
    return db('pessoa_juridica').where({ id }).first();
};

export const update = async (id: number, company: Partial<Company>): Promise<number[]> => {
    return db('pessoa_juridica').where({ id }).update(company).returning('*');
};

export const remove = async (id: number): Promise<number> => {
    return db('pessoa_juridica').where({ id }).del();
};

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};