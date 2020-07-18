import { Router } from 'express'
import {
  getPosicoes,
  createPosicao,
  getPosicao,
  deletePosicao,
  updatePosicao,
} from '../controllers/posicao.controller'

const router = Router()

router.route('/')
  .get(getPosicoes)
  .post(createPosicao)

router
  .route('/:posicaoId')
  .get(getPosicao)
  .delete(deletePosicao)
  .put(updatePosicao)

export default router