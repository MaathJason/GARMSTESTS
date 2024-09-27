import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import CarroController from './app/controllers/CarroController.js';
import cors from 'cors';
import client from 'prom-client';

const app = express();
const register = client.register;

// Indicar para o express ler body com JSON e usar o CORS
app.use(express.json());
app.use(cors({
  origin: '*', // Permitir todas as origens
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

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