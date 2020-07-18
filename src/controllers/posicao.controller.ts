import { Request, Response } from 'express'
import { connect } from '../database'
import { Posicao } from '../interface/posicao.interface'

export async function getPosicoes(req: Request, res: Response): Promise<Response> {
    const conn = await connect()
    const posicoes = await conn.query('SELECT * FROM posicao')
    return res.json(posicoes[0])
}

export async function createPosicao(req: Request, res: Response) {
    const newPosicao: Posicao = req.body
    const conn = await connect()
    conn.query('INSERT INTO posicao SET ?', [newPosicao])
    return res.json({
        message: 'A posição foi criada com sucesso!'
    })
}

export async function getPosicao(req: Request, res: Response): Promise<Response> {
    const id = req.params.posicaoId
    const conn = await connect()
    const posicao = await conn.query('SELECT * FROM posicao WHERE id_posicao = ?', [id])
    return res.json(posicao[0])
}

export async function deletePosicao(req: Request, res: Response) {
    const id = req.params.posicaoId
    const conn = await connect()
    await conn.query('DELETE FROM posicao WHERE id_posicao = ?', [id])
    return res.json({
        message: 'A posição foi deletada com sucesso!'
    })
}

export async function updatePosicao(req: Request, res: Response) {
    const id = req.params.posicaoId
    const updatePosicao: Posicao = req.body
    const conn = await connect()
    await conn.query('UPDATE posicao SET ? WHERE id_posicao = ?', [updatePosicao, id])
    return res.json({
        message: 'A posição foi atualizada com sucesso!'
    })
}