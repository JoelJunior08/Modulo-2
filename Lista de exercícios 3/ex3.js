// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.

const funcionario1 = {
    nome: "Carlos",
    cargo: "Desenvolvedor",
    salario: 5000,
    anosExp: 2
}

const funcionario2 = {
    nome: "João",
    cargo: "Analista",
    salario: 4500,
    anosExp: 4
}

const funcionario3 = {
    nome: "Lucas",
    cargo: "Tecnico",
    salario: 3000,
    anosExp: 12
}
console.log("Funcionário 1:")
for (const atributo in funcionario1){
    console.log(`${atributo}: ${funcionario1[atributo]}`)
}
if (funcionario1.anosExp <= 2){
    console.log(`Bônus anual: R$ ${(funcionario1.salario * 0.05).toFixed(2)}`)
}
else if (funcionario1.anosExp >= 3 && funcionario1.anosExp <= 5){
    console.log(`Bônus anual: R$ ${(funcionario1.salario * 0.1).toFixed(2)}`)
}
else {
    console.log(`Bônus anual: R$ ${(funcionario1.salario * 0.15).toFixed(2)}`)
}
console.log("\nFuncionário 2:")
for (const atributo in funcionario2){
    console.log(`${atributo}: ${funcionario2[atributo]}`)
}
if (funcionario2.anosExp <= 2){
    console.log(`Bônus anual: R$ ${(funcionario2.salario * 0.05).toFixed(2)}`)
}
else if (funcionario2.anosExp >= 3 && funcionario2.anosExp <= 5){
    console.log(`Bônus anual: R$ ${(funcionario2.salario * 0.1).toFixed(2)}`)
}
else {
    console.log(`Bônus anual: R$ ${(funcionario2.salario * 0.15).toFixed(2)}`)
}
console.log("\nFuncionário 3:")
for (const atributo in funcionario3){
    console.log(`${atributo}: ${funcionario3[atributo]}`)
}
if (funcionario3.anosExp <= 2){
    console.log(`Bônus anual: R$ ${(funcionario3.salario * 0.05).toFixed(2)}`)
}
else if (funcionario3.anosExp >= 3 && funcionario3.anosExp <= 5){
    console.log(`Bônus anual: R$ ${(funcionario3.salario * 0.1).toFixed(2)}`)
}
else {
    console.log(`Bônus anual: R$ ${(funcionario3.salario * 0.15).toFixed(2)}`)
}