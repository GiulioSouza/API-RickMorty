const express = require('express')
const rotas = require('./rotas')
const app = express()

app.use(express.static('css' + '/../../front/'));
app.use(express.static('src' + '/../../front/'));
app.use(rotas)
app.listen(3000)