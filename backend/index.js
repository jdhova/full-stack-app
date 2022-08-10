const express = require('express')
const app = express()

app.get('/home', (req,res) => {
    res.send('home here')
})

const port = 5000
app.listen(port,() => {
    console.log(`running on ${port}`)
})