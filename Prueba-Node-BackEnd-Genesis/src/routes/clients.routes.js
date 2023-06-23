import { Router } from 'express';
import { deleteClienteById, getClienteById, getClientes, postCliente, putClienteById } from '../controllers/clients.controller';

const router = Router();

router.get('/clientes', getClientes);

router.post('/clientes', postCliente);

router.get('/clientes/:id', getClienteById);

router.delete('/clientes/:id', deleteClienteById);

router.put('/clientes/:id', putClienteById);


export default router;