const express = require('express')
const app = express()
const PORT = process.env.PORT
const connection = require('./database/connection')


//importare asset statici e roter + gestione errori


app.listen(PORT, ()=>{
    console.log('Server is listening');    
})

app.get('/', (req, res)=>{
    res.send('HEY LISTEN!! Welcome to the app')
})

app.get('/movies/:id', (req, res)=>{
    res.send('Movies List here')
})

app.get('/movies', (req, res)=>{
    res.send('One movie here')
})