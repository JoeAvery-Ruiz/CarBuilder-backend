const express = require('express')
const app = express()
const port = 8000
const morgan = require('morgan')
const cors = require('cors')
const carRoutes = require('./routes/carRoutes')
/* const authRoutes = require('./routes/authRoutes') */
require('./db/connection')




app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/car', carRoutes)
/* app.use('/auth', authRoutes) */


app.get('/', (req, res)  => {
    res.json('welcome to car builder')
})

app.listen(port, ()=>{
    console.log('Carbuilder on',port)
})