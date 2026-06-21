// 10. Implemente uma pilha usando um array para simular o histórico de um
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
// cada operação.

class historico{
    constructor(){
        this.itens = []
    }
    visitar(pagina){
        this.itens.push(pagina)
        console.log(`Visitando ${pagina}`)
    }
    voltar(){
        if(this.itens.length === 0){
            console.log(`Não há mais páginas para voltar!\n`)
        }
        console.log(`Voltando de: ${this.itens.pop()}\n`)
    }
    paginaAtual(){
        if(this.itens.length === 0){
            console.log(`Nenhuma página aberta!\n`)
        }
        console.log(`Página atual: ${this.itens[this.itens.length - 1]}\n`)
    }
}
const navegador = new historico
const prompt = require("prompt-sync")()
let pesquisar = ""

pesquisar = prompt("Informe a página que deseja visitar: ")
navegador.visitar(pesquisar)
navegador.paginaAtual()

pesquisar = prompt("Informe a página que deseja visitar: ")
navegador.visitar(pesquisar)
navegador.paginaAtual()

pesquisar = prompt("Informe a página que deseja visitar: ")
navegador.visitar(pesquisar)
navegador.paginaAtual()

pesquisar = prompt("Informe a página que deseja visitar: ")
navegador.visitar(pesquisar)
navegador.paginaAtual()

navegador.voltar()
navegador.voltar()
navegador.paginaAtual()