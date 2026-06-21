// 11. Implemente uma fila usando um array para simular o atendimento de uma
// clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
// exibindo o estado da fila a cada operação.


class Fila{
    constructor(){
        this.itens = []
    }
    chegarPaciente(nome){
        this.itens.push(nome)
        console.log(`${nome} Adicionado à fila!`)
    }
    chamarProximo(){
        if(this.vazio()){
            return "A fila está vazia"
        }
        let paciente = this.itens.shift()
        console.log(`Chamando ${paciente}`)
        return paciente
        
    }
    exibirFila(){
        console.log(`Fila: ${this.itens.join(' - ')}`)
    }
    vazio(){
        return this.itens.length === 0
    }
    proximo(){
        if(this.vazio()){
            return "A fila está vazia!"
        }
        return this.itens[0]
    }
    
}
const fila = new Fila

fila.chegarPaciente("Amanda")
fila.exibirFila()

fila.chegarPaciente("Joel")
fila.exibirFila()

fila.chegarPaciente("Lucas")
fila.exibirFila()

fila.chegarPaciente("Maria")
fila.exibirFila()

fila.chegarPaciente("Pedro")
fila.exibirFila()

fila.chamarProximo()
fila.exibirFila()

fila.chamarProximo()
fila.exibirFila()

fila.chamarProximo()
fila.exibirFila()