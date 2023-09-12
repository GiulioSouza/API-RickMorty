const express = require('express');
const rotas = express()
const controladores = require('./controladores/controladores')

rotas.get('/pesquisa_por_nome', controladores.pesquisaPorNome)

module.exports = rotas