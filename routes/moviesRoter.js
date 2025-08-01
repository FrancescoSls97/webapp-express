const express = require('express')
const router = express.Router()



//index 
router.get('/', (req, res)=>{
    res.send('Movies List here')
})

//show
router.get('/:id', (req, res)=>{
    res.send('One movie here')
})

module.exports = router