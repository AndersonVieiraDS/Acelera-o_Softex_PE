import db from '../db';

interface Media {
    id?: number;
    titulo: string;
    descricao: string;
    tipo: string;
    caminho: string;
    cliente_id?: number;
    status: string;
    data_inicio?: Date;
    data_fim?: Date;
    criado_por: number;
    criado_em?: Date;
    atualizado_em?: Date;
    atualizado_por: number;
    excluido_em?: Date;
    excluido_por: number;
}

export const create = async (media: Media): Promise<number[]> => {
    return db('midia').insert(media).returning('id');
};

export const findAll = async (): Promise<Media[]> => {
    return db('midia').select('*');
};

export const findById = async (id: number): Promise<Media | undefined> => {
    return db('midia').where({ id }).first();
};

export const update = async (id: number, media: Partial<Media>): Promise<number[]> => {
    return db('midia').where({ id }).update(media).returning('*');
};

export const remove = async (id: number): Promise<number> => {
    return db('midia').where({ id }).del();
};

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};