import dotenv from 'dotenv';
dotenv.config();


import mysql from 'mysql2';


const conexao = mysql.createConnection({
    //host: 'database-1.cle2qmq2knj6.us-east-2.rds.amazonaws.com',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conexao.connect();

export default conexao;