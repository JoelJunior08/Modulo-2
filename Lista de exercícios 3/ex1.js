// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

const produto = {
    nome: "Smartphone",
    preco: 1500,
    categoria: "Eletrônicos",
    quantidadeEmEstoque: 50
};

for (const propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}

produto.desconto = (produto.preco * 0.1); // 10% de desconto
const precoFinal = produto.preco - produto.desconto;
console.log(`Preço final com 10% de desconto: R$ ${precoFinal.toFixed(2)}`);