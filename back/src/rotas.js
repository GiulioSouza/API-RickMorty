const express = require('express');
const rotas = express()
const controladores = require('./controladores/controladores')

rotas.get('/pesquisa_personagem/:nome', controladores.recebePersonagem)

module.exports = rotas