// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

const orcamento = {
    alimentacao: { planejado: 500, gasto: 450 },
    transporte: { planejado: 200, gasto: 250 },
    lazer: { planejado: 200, gasto: 250 },
    saude: { planejado: 150, gasto: 50 }
};
let saldo = 0;
let gastos = 0;

for (const categoria in orcamento) {
    const { planejado, gasto } = orcamento[categoria];
    console.log(`${categoria}: Planejado - R$ ${planejado}, Gasto - R$ ${gasto}`);

    if (gasto > planejado) {
        console.log(`A categoria "${categoria}" está acima do orçamento.`);
    } else {
        console.log(`A categoria "${categoria}" está dentro do orçamento.`);
    }

    gastos += gasto;
    saldo += planejado;
}
console.log(`Total gasto: R$ ${gastos},00`);
console.log(`Saldo geral: R$ ${saldo - gastos},00`);