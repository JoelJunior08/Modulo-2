// 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
// Use forEach para calcular o valor total em estoque de cada produto (preço ×
// quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
// estoque.

const produtos = [
    {
        produto: "Coca-cola",
        preco: 12,
        quantidade: 20,
    },
    {
        produto: "Fanta",
        preco: 11,
        quantidade: 15,
    },
    {
        produto: "Kuat",
        preco: 10,
        quantidade: 10,
    },
    {
        produto: "Sprite",
        preco: 10,
        quantidade: 6,
    },
]

let valorTotal = 0
produtos.forEach(produto => {
    let valorEstoque = produto.preco * produto.quantidade
    console.log(`   ${produto.produto} 
        - Preço: R$${produto.preco} 
        - Quantidade em estoque: ${produto.quantidade} 
        - Valor em estoque: R$${valorEstoque},00`)
    valorTotal += valorEstoque
})
console.log(`
    Valor total em estoque: R$${valorTotal},00
`)
