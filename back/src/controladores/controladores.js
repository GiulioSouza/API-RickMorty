const pesquisaPorNome = (req, res) => {
    res.sendFile('index.html', {'root': __dirname + '/../../../front/'});
}

module.exports = {
    pesquisaPorNome
}