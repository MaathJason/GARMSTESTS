import express from 'express';
import CarroController from './app/controllers/CarroController.js';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express();


//Indicar para o express ler body com JSON e usar o CORS (qualquer front-end pode acessar o server)
app.use(express.json())
app.use(cors())

//CREATE (C)
app.post('/carros', CarroController.store)


//READ (R)
app.get('/carros', CarroController.index)

app.get('/carros/:id', CarroController.show)


//UPDATE (U)
app.put('/carros/:id', CarroController.update)


//DELETE (D)
app.delete('/carros/:id', CarroController.delete)





export default app
