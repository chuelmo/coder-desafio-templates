const express = require('express')
const { router, productos} = require('./routes/routes')

// Templates requeridos por el desafio
const pug = require('pug')

const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, (req, res) => {
    console.log('Server on in port: ', PORT)
})

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/productos', router)

app.get('/', (req, res) => {
    res.render('form')
})

app.get('/productos', (req, res) => {
    res.render('prodTable', {lista: productos})
})
