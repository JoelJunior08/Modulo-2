// 9. Crie um array de objetos onde cada objeto representa um contato com nome,
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
// buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
// uma mensagem de "não encontrado".

const contatos= [
    {
        nome: "Lucas",
        telefone: 77982194551,
        email: "lucas@gmail.com"
    },
    {
        nome: "Claudio",
        telefone: 77988114591,
        email: "claudio@gmail.com"
    },
    {
        nome: "Amanda",
        telefone: 77981189452,
        email: "amanda@gmail.com"
    }
]
const prompt = require("prompt-sync")()
let procurar = ""

contatos.forEach(iten => {
    console.log(`${iten.nome} - Telefone: ${iten.telefone} ; E-mail: ${iten.email}`)
});

for (list of contatos){
    procurar = prompt("Digite o nome do contato que deseja buscar: ")

    if(procurar === list.nome){
        console.log(`Resultado encontrado: 
            ${list.nome} - Telefone: ${list.telefone} ; E-mail: ${list.email}
        `)
    }
    else{
        console.log("Resultado não encontrado!")
        break
    }
}