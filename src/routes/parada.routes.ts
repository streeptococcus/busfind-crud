import { Router } from 'express'
import {
  getParadas,
  createParada,
  getParada,
  deleteParada,
  updateParada,
} from '../controllers/parada.controller'

const router = Router()

router.route('/').get(getParadas).post(createParada)

router
  .route('/:paradaId')
  .get(getParada)
  .delete(deleteParada)
  .put(updateParada)

export default router