const express = require('express')
const app = express()
const PORT = process.env.PORT
const moviesRouter = require('./routes/moviesRoter')
const connection = require('./database/connection')

app.use('/api/movies', moviesRouter)
//importare asset statici e roter + gestione errori


app.listen(PORT, ()=>{
    console.log('Server is listening');    
})

app.get('/', (req, res)=>{
    res.send('HEY LISTEN!! Welcome to the app')
})

/*app.get('/movies', (req, res)=>{
    res.send('Movies List here')
})

app.get('/movies7:id', (req, res)=>{
    res.send('One movie here')
}) */