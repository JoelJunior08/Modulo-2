// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
// cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
// forEach para calcular e exibir separadamente a média dos aprovados e a média
// dos reprovados.

const alunos = [
    {
        nome: "João",
        nota: 8.5
    },
    {
        nome: "Maria",
        nota: 7.0
    },
    {
        nome: "Pedro",
        nota: 5.5
    },
    {
        nome: "Ana",
        nota: 9.0
    },
    {
        nome: "Carlos",
        nota: 6.5
    },
    {
        nome: "Fernanda",
        nota: 4.0
    }
]

const aprovados = [];
const reprovados = [];
for (const aluno of alunos) {
    console.log(`${aluno.nome} - ${aluno.nota}`);

    if (aluno.nota >= 6){
        console.log(`${aluno.nome} - Aprovado`);
        aprovados.push(aluno);
    }
    else if (aluno.nota >= 5 && aluno.nota < 6) {
        console.log(`${aluno.nome} - Recuperação`);
        reprovados.push(aluno);
    }
    else {
        console.log(`${aluno.nome} - Reprovado`);
        reprovados.push(aluno);
    }
}
let somaAprovados = 0;
aprovados.forEach(aluno => somaAprovados += aluno.nota);
const mediaAprovados = somaAprovados / aprovados.length;
console.log(`Média dos aprovados: ${mediaAprovados.toFixed(2)}`);
let somaReprovados = 0;
reprovados.forEach(aluno => somaReprovados += aluno.nota);
const mediaReprovados = somaReprovados / reprovados.length;
console.log(`Média dos reprovados: ${mediaReprovados.toFixed(2)}`);