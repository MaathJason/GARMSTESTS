import mysql from 'mysql';



const conexao = mysql.createConnection({
    host: 'database-1.cle2qmq2knj6.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'dbgarms.test',
    database: 'database_1'
})

conexao.connect();

export default conexao;