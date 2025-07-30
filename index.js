require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('@swagatk9')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/github', (req, res) => {
    res.send('<h2>swagat-codes</h2>')
}) 

app.listen(process.env.PORT, () => {
    console.log(`Example app is listening on port ${port}`)
})