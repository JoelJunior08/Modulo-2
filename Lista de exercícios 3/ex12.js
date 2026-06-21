// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
// exiba a lista antes e depois.

class no{
    constructor(tarefa){
        this.tarefa = tarefa
        this.proximo = null
    }
}
class lista{
    constructor(){
        this.inicio = null
    }
    adicionar(tarefa){
        const novono = new no(tarefa)

        if (this.inicio === null){
            this.inicio = novono
            return
        }
        let atual = this.inicio

        while (atual.proximo !== null){
            atual = atual.proximo
        }
        atual.proximo = novono

    }
    remover(tarefa){
        if(this.inicio === null){
            this.inicio = this.inicio.proximo
            return
        }
        let atual = this.inicio

        if (this.inicio.tarefa === tarefa){
            this.inicio = this.inicio.proximo
            return
        }
        while(atual.proximo !== null && atual.proximo.tarefa !== tarefa){
            atual = atual.proximo
        }
        if(atual.proximo !== null){
            atual.proximo = atual.proximo.proximo
        }
    }
    exibir(){
        console.log("Tarefas: ")
        let atual = this.inicio

        while(atual !== null){
            console.log(` - ${atual.tarefa}`)

            atual = atual.proximo
        }
        console.log("\n")
    }
}

const tarefa = new lista

tarefa.adicionar("Lavar louça")
tarefa.exibir()

tarefa.adicionar("trabalhar")
tarefa.exibir()

tarefa.adicionar("Estudar")
tarefa.exibir()

tarefa.adicionar("Fazer compras")
tarefa.exibir()

tarefa.remover("Lavar louça")
tarefa.exibir()