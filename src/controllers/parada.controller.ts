import { Request, Response } from 'express'
import { connect } from '../database'
import { Parada } from '../interface/parada.interface'

export async function getParadas(
  req: Request,
  res: Response
): Promise<Response> {
  const conn = await connect()
  const paradas = await conn.query('SELECT * FROM paradas')
  return res.json(paradas[0])
}

export async function createParada(req: Request, res: Response) {
  const newParada: Parada = req.body
  const conn = await connect()
  conn.query('INSERT INTO paradas SET ?', [newParada])
  return res.json({
    message: 'A parada foi criada com sucesso!',
  })
}

export async function getParada(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.paradaId
  const conn = await connect()
  const parada = await conn.query('SELECT * FROM paradas WHERE id_parada = ?', [
    id,
  ])
  return res.json(parada[0])
}

export async function deleteParada(req: Request, res: Response) {
  const id = req.params.paradaId 
  const conn = await connect()
  await conn.query('DELETE FROM paradas WHERE id_parada = ?', [id])
  return res.json({
    message: 'A parada foi deletada com sucesso!',
  })
}

export async function updateParada(req: Request, res: Response) {
  const id = req.params.paradaId
  const updateParada: Parada = req.body
  const conn = await connect()
  await conn.query('UPDATE paradas SET ? WHERE id_parada = ?', [updateParada, id])
  return res.json({
    message: 'A parada foi atualizada com sucesso!',
  })
}

export async function getParadaByPosicao(
  req: Request,
  res: Response
): Promise<Response> {
  const lati = req.params.lati
  const longi = req.params.longi
  const conn = await connect()
  const paradas = await conn.query('SELECT * FROM paradas WHERE lati = ? AND longi = ?', [lati, longi])
  return res.json(paradas[0])
}