class Movimantacao{
    constructor(banco = "padrao", nome = "", saldo = 0){
        this.banco = banco
        this.nome = nome 
        this.saldo = saldo
    }
}

class Regristro{
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano 
        this.Movimantacao = []
    }


    novaMovimentacao(... Movimantacao){
        Movimantacao.forEach(lancamento => this.Movimantacao.push(lancamento))
        
    }

    resumo(){
        let valorAtualizado = 0
        this.Movimantacao.forEach(lancamento =>{
        valorAtualizado += lancamento.saldo
        })
        return valorAtualizado
    }
}

const movimanta01 = new Movimantacao ('BTG', 'salario', 20000)
const movimanta02 = new Movimantacao ('ITAU', 'comissao', 2000)
const movimanta03 = new Movimantacao ('CAIXA', 'imposto', -5000)

const registro01 = new Regristro (22,10,2022)
registro01.novaMovimentacao(movimanta01, movimanta02, movimanta03)
console.log('o saldo dos registros foi de:' + registro01.resumo())


