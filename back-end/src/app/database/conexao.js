// import mysql from "mysql"

// const conexao = mysql.createConnection({
//     host: 'database-1.cle2qmq2knj6.us-east-2.rds.amazonaws.com',
//     port: '3306',
//     user: 'admin',
//     password: 'garmsninguemtapuro',
//     database: 'database-1'
// })

// conexao.connect()

// export default conexao


// db.js
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conexao.connect();

export default conexao;
