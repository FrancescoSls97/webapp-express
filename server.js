const express = require('express')
const app = express()
const PORT = process.env.PORT
const moviesRouter = require('./routes/movies')
const cors = require('cors')

app.use(cors())

app.use(express.static('public'))

app.use('/api/movies', moviesRouter)
//importare asset statici e roter + gestione errori


app.listen(PORT, ()=>{
    console.log('Server is listening');    
})

app.get('/', (req, res)=>{
    res.send('HEY LISTEN!! Welcome to the app')
})

