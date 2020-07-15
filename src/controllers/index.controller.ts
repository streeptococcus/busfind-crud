import { Request, Response } from 'express';

export function WelcomeSpaceCowboy(req: Request, res: Response): Response {
    return res.json("Bem vindo a Busfind API!");
}