import { Router } from 'express';
import { getCapas } from '../controllers/capas.controller';

const router = Router();

router.get('/capas', getCapas);


export default router;