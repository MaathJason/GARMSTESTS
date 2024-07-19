import express from 'express';
import conexao from '../infra/conexao.js'
const app = express();

//Indicar para o express ler body com JSON
app.use(express.json())


//Buscar carro pelo id no array
function buscarCarroPorId(id) {
    return carros.filter( carro => carro.id == id)
}


//Pegar index do elemento no arrayef
function buscarIndexCarro(id) {
    return carros.findIndex( carro => carro.id == id)
}


//CREATE (C)
app.post('/carros', (req, res) => { //POST serve para o usuário inserir informaçoes 
    // carros.push(req.body)
    // res.status(201).send('Carro cadastrado com sucesso!')

    const carro = req.body
    const sql = 'INSERT INTO carros SET ?;'
    conexao.query(sql, carro, (error, result) => {
        if (error) {
            res.status(400).json({ 'erro': error })
        } else {
            res.status(201).json(result)
        }
    })
})


//READ (R)
app.get('/carros', (req, res) => {
    // res.status(200).send(carros)
    const sql = 'SELECT * FROM carros;'
    conexao.query(sql, (error, result, fields) => {
        if (error) {
            res.status(404).json({ 'erro': error })
        } else {
            res.status(200).json(result)
        }
    })
})

app.get('/carros/:id', (req, res) => {
    // let index = req.params.id
    // res.json(buscarCarroPorId(req.params.id))
    const id = req.params.id
    const sql = 'SELECT * FROM carros WHERE id=?;'
    conexao.query(sql, id, (error, result) => {
        const row = result[0]
        if (error) {
            res.status(404).json({ 'erro': error })
        } else {
            res.status(200).json(row)
        }
    })
})


//UPDATE (U)
app.put('/carros/:id', (req, res) => {
    // let index = buscarIndexCarro(req.params.id)
    // carros[index].Carro = req.body.Carro
    // carros[index].Marca = req.body.Marca
    // carros[index].Placa = req.body.Placa
    // carros[index].Ano = req.body.Ano
    // res.json(carros)

    const id = req.params.id
    const carro = req.body
    const sql = 'UPDATE carros SET ? WHERE id=?;'
    conexao.query(sql, [carro, id], (error, result) => {
        if (error) {
            res.status(400).json({ 'erro': error })
        } else {
            res.status(200).json(result)
        }
    })
})


//DELETE (D)
app.delete('/carros/:id', (req, res) => {
    // let index = buscarIndexCarro(req.params.id)
    // carros.splice(index, 1)
    // res.send(`Carro com id ${req.params.id} excluído com sucesso!`)

    const id = req.params.id
    const sql = 'DELETE FROM carros WHERE id=?;'
    conexao.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({ 'erro': error })
        } else {
            res.status(200).json(result)
        }
    })
})





export default app
