const axios = require('axios')

const pesquisaPorNome = (req, res) => {
    res.sendFile('index.html', {'root': __dirname + '/../../../front/'});
}

const recebePersonagem = async (req, res) => {
    const {nome} = req.params
    try{
        const url = `https://rickandmortyapi.com/api/character/?name=${nome}`
        const response = await axios.get(url)
        return res.json(response.data.results)
    }catch(e){
        console.log(e)
        return
    }
}

module.exports = {
    pesquisaPorNome,
    recebePersonagem
}