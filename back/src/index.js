const express = require('express')
const rotas = require('./rotas')
const app = express()
const cors = require('cors');

app.use(express.static('css' + '/../../front/'));
app.use(express.static('src' + '/../../front/'));

app.use(cors())
app.use(express.json())
app.use(rotas)
app.listen(3000)