const connection = require('../database/connection')

function index(req, res) {
    //query
    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, result) =>{
        //gestione errore 500
        if (err) return res.status(500).json({error: err.message})

        //response in json

        console.log(result);
        
        res.json(result)
    })

    //res.send('All movies here')
}

function show(req, res) {
    res.send('One movie here')
}

module.exports = {
    index,
    show
}