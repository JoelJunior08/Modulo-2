// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

const prompt = require("prompt-sync")()

const inventario = {
    espada: 1,
    pocao: 5,
    escudo: 1
}

console.log("Inventário do jogador:")

for (const item in inventario) {
    console.log(`${item}: ${inventario[item]}`)
}

let itens = true

while (itens) {
    const item = prompt("Informe o item que deseja usar: ")

    if (!(item in inventario)) {
        console.log("Item inválido.")
        continue
    }

    if (inventario[item] === 0) {
        console.log("Item esgotado!")
    } else {
        inventario[item]--
        console.log(`Você usou ${item}. Restam ${inventario[item]}.`)
    }

    if (
        inventario.espada === 0 &&
        inventario.pocao === 0 &&
        inventario.escudo === 0
    ) {
        console.log("Todos os itens estão esgotados.")
        itens = false
    }
}