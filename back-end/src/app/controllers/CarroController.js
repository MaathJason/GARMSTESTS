import conexao from '../database/conexao.js'

class CarroController {

    index(req, res) {

        const sql = 'SELECT * FROM carros;'
        conexao.query(sql, (error, result, fields) => {
            if (error) {
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

    show(req, res) {

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
    }

    store(req, res) {

        const carro = req.body
        const sql = 'INSERT INTO carros SET ?;'
        conexao.query(sql, carro, (error, result) => {
            if (error) {
                res.status(404).json({ 'erro': error })
            } else {
                res.status(201).json(result)
            }
        })
    }
    

    update(req, res) {

        const id = req.params.id
        const carro = req.body
        const sql = 'UPDATE carros SET ? WHERE id=?;'
        conexao.query(sql, [carro, id], (error, result) => {
            if (error) {
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

    delete(req, res) {

        const id = req.params.id
        const sql = 'DELETE FROM carros WHERE id=?;'
        conexao.query(sql, id, (error, result) => {
            if (error) {
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(result)
            }
        })
    }
}

export default new CarroController()