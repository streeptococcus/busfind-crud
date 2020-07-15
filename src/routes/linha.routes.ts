import { Router } from 'express';
import { getLinhas, createLinha, getLinha, deleteLinha, updateLinha, getLinhaByParada} from '../controllers/linha.controller';

const router = Router();

router.route('/')
    .get(getLinhas)
    .post(createLinha);

router.route('/:linhaId')
    .get(getLinha)
    .delete(deleteLinha)
    .put(updateLinha);

router.route('/parada/:paradaId')
    .get(getLinhaByParada);

export default router;