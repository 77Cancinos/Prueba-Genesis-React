import { Router } from 'express';
import { deleteCinchosById, getCinchos, postCinchos, putCinchoById } from '../controllers/cinchos.controller';

const router = Router();

router.get('/cinchos', getCinchos);

router.post('/cinchos', postCinchos);

router.delete('/cinchos/:id', deleteCinchosById);

router.put('/cinchos/:id', putCinchoById);


export default router;