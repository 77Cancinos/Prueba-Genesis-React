import { Router } from 'express';
import { deleteDetalleCinchosById, getDetalleCinchos, postDetalleCinchos, putDetalleCinchoById } from '../controllers/detalle_cincho.controller';

const router = Router();

router.get('/detalle_cincho', getDetalleCinchos);

router.post('/detalle_cincho', postDetalleCinchos);

router.delete('/detalle_cincho/:id', deleteDetalleCinchosById);

export default router;