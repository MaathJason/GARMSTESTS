import express from 'express';
import CarroController from './app/controllers/CarroController.js';
const app = express();

//Indicar para o express ler body com JSON
app.use(express.json())

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
