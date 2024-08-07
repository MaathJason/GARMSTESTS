import mysql from "mysql"

const conexao = mysql.createConnection({
    host: 'database-1.cle2qmq2knj6.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'garmsninguemtapuro',
    database: 'database-1'
})

conexao.connect()

export default conexao