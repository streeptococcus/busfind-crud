import { Router } from 'express';
import { WelcomeSpaceCowboy } from '../controllers/index.controller';

const router = Router();

router.route('/').get(WelcomeSpaceCowboy);

export default router;