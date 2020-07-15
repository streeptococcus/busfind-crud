import { Request, Response } from 'express';
import { connect } from '../database';
import { Linha } from '../interface/linha.interface'

export async function getLinhas(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const linhas = await conn.query("SELECT * FROM linhas");
    return res.json(linhas[0]);
}

export async function createLinha(req: Request, res: Response) {
    const newLinha: Linha = req.body;
    const conn = await connect();
    conn.query("INSERT INTO linhas SET ?", [newLinha]);
    return res.json({
        message: 'A linha foi criada com sucesso!'
    })
}

export async function getLinha(req: Request, res: Response): Promise<Response> {
    const id = req.params.linhaId;
    const conn = await connect();
    const linha = await conn.query("SELECT * FROM linhas WHERE id_linha = ?", [id]);
    return res.json(linha[0]);
}

export async function deleteLinha(req: Request, res: Response) {
    const id = req.params.linhaId;
    const conn = await connect();
    await conn.query("DELETE FROM linhas WHERE id_linha = ?", [id]);
    return res.json({
        message: 'A linha foi deletada com sucesso!'
    })
}

export async function updateLinha(req: Request, res: Response) {
    const id = req.params.linhaId;
    const updateLinha: Linha = req.body;
    const conn = await connect();
    await conn.query("UPDATE linhas SET ? WHERE id_linha = ?", [updateLinha, id]);
    return res.json({
        message: 'A linha foi atualizada com sucesso!'
    })
}

export async function getLinhaByParada(req: Request, res: Response): Promise<Response> {
    const id = req.params.paradaId;
    const conn = await connect();
    const linhas = await conn.query("SELECT id_linha, nome_linha, linhas.created_at, linhas.modified_at, id_parada_fk FROM linhas INNER JOIN paradas WHERE id_parada = ?", [id]);
    return res.json(linhas[0]);
}