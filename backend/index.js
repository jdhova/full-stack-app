const express = require('express')
const app = express()
const cors = require('cors')


// Middlewares

app.use(cors())
app.use(express.json())



// Routes
app.post('/api/register', (req,res) => {
    console.log(req.body)
    res.json({status: 'back end recieved'})
})

const port = 5000
app.listen(port,() => {
    console.log(`running on ${port}`)
})