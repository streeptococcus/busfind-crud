import { Router } from 'express'
import {
  getVeiculos,
  createVeiculo,
  getVeiculo,
  deleteVeiculo,
  updateVeiculo,
  getVeiculosByLinha,
} from '../controllers/veiculo.controller'

const router = Router()

router.route('/')
  .get(getVeiculos)
  .post(createVeiculo)

router
  .route('/:veiculoId')
  .get(getVeiculo)
  .delete(deleteVeiculo)
  .put(updateVeiculo)

router.route('/?linha=:linhaId').get(getVeiculosByLinha)

export default router