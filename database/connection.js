//connessione al database
const mysql = require('mysql2')

const credentials = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
const connection = mysql.createConnection(credentials)

//verifica di connection

connection.connect(err =>{
    if(err) {
        throw err
    }
    console.info('Database connected')
})

module.exports = connection