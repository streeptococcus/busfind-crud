import { Request, Response, ErrorRequestHandler } from 'express'

export function Welcome(req: Request, res: Response): Response {
    return res.json('Bem vindo a Busfind API!')
}
