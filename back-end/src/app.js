import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import CarroController from './app/controllers/CarroController.js';
import cors from 'cors';
import client from 'prom-client';

const app = express();
const register = client.register;

// Define uma métrica de exemplo
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'status_code'],
});

// Middleware para contar requisições
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({ method: req.method, status_code: res.statusCode });
  });
  next();
});

// Adiciona o endpoint /metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Indicar para o express ler body com JSON e usar o CORS
app.use(express.json());
app.use(cors());

// CREATE (C)
app.post('/carros', CarroController.store);

// READ (R)
app.get('/carros', CarroController.index);
app.get('/carros/:id', CarroController.show);

// UPDATE (U)
app.put('/carros/:id', CarroController.update);

// DELETE (D)
app.delete('/carros/:id', CarroController.delete);

export default app;
