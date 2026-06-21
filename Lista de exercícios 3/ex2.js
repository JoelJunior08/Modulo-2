// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

const personagem1 = {
    nome: "Kratos",
    vida: 100,
    ataque: 85,
    defesa: 70
}
const personagem2 = {
    nome: "Atreus",
    vida: 100,
    ataque: 70,
    defesa: 55
}
let poder1 = 0
let poder2 = 0

for (const atributo in personagem1){
    console.log(`Personagem1: ${atributo} -  ${personagem1[atributo]} ; Personagem 2: ${atributo}: ${personagem2[atributo]}`);
    if (atributo !== "nome"){
        poder1 += personagem1[atributo]
        poder2 += personagem2[atributo]
    }
}
console.log(`Poder total do personagem 1: ${poder1}`)
console.log(`Poder total do personagem 2: ${poder2}`)

if (poder1 > poder2){
    console.log(`${personagem1.nome} tem o maior poder total!`)
}
else if (poder1 < poder2){
    console.log(`${personagem2.nome} tem o maior poder total!`)
}
else {
    console.log(`Os dois personagens tem o mesmo poder total!`)
}
