import { Router } from 'express'
import {
  getParadas,
  createParada,
  getParada,
  deleteParada,
  updateParada,
  getParadaByPosicao
} from '../controllers/parada.controller'

const router = Router()

router.route('/')
  .get(getParadas)
  .post(createParada)

router
  .route('/:paradaId')
  .get(getParada)
  .delete(deleteParada)
  .put(updateParada)

router
  .route('/latitude=:lati/longitude=:longi')
  .get(getParadaByPosicao)

export default router