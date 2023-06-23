import express from 'express';
import cors from 'cors'

import config from './config';

import clientsRoutes from './routes/clients.routes';
import cinchosRoutes from './routes/cinchos.routes';
import detalleCinchoRoutes from './routes/detalle_cincho.routes';
import capasRoutes from './routes/capas.routes';

const app = express();

// Habilitar los encabezados de CORS para todas las solicitudes
app.use(cors());

//configuración inicial
app.set('port', config.port);

//middleares
app.use(express.json()); //Para que pueda recibir json
app.use(express.urlencoded({ extended: false }));

app.use(clientsRoutes);
app.use(cinchosRoutes);
app.use(detalleCinchoRoutes);
app.use(capasRoutes);

export default app;