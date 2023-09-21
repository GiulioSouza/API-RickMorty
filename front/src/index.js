//bibliotecas


//querys HTML
const inputNomePersonagem = document.querySelector('#nome-personagem')
const botaoEnviar = document.querySelector('#botao-enviar')
const divPersonagens = document.querySelector('#personagens')

//escutadores
botaoEnviar.addEventListener('click', (e) => {
    const nomePersonagem = inputNomePersonagem.value
    e.preventDefault()

    buscaPersonagem(nomePersonagem)
})

//funções
const buscaPersonagem = async (nome) => {
    try{
        const url = `http://localhost:3000/pesquisa_personagem/${nome}`
        const response = await axios.get(url)

        criaPersonagem(response.data)
        return
    }catch(e){
        console.log(e)
        return
    }
}

const criaPersonagem = (response) => {
    const personagens =  response

    personagens.forEach(personagem => {
        let divCard = document.createElement("div")
        divCard.className = "card"

        let img = document.createElement("img")
        img.src = personagem.image

        let h2Nome = document.createElement("h2")
        h2Nome.innerText = `Nome: ${personagem.name}`

        let h2Status = document.createElement("h2")
        h2Status.innerText = `Status: ${personagem.status}`

        let h2Species = document.createElement("h2")
        h2Species.innerText = `Espécie: ${personagem.species}`

        let h2Gender = document.createElement("h2")
        h2Gender.innerText = `Gênero: ${personagem.gender}`

        divPersonagens.appendChild(divCard)
        divCard.appendChild(img)
        divCard.appendChild(h2Nome)
        divCard.appendChild(h2Status)
        divCard.appendChild(h2Species)
        divCard.appendChild(h2Gender)
    })
}