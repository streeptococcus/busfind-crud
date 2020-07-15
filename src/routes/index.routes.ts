import { Router } from 'express'
import { Welcome } from '../controllers/index.controller'

const router = Router()

router.route('/').get(Welcome)

export default router